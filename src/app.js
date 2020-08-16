const http = require('http');

const {get, post, put, del, findRouteHandlers} = require('./routing');
const {use, getMiddlewares} = require('./middlewares');
const {serverListen} = require('./server');

function handlerWrapper(req, res) {
	req.state = {};

	let nextCalled = true;

	const next = () => {
		nextCalled = true;
	};

	const handlers = getMiddlewares().concat(findRouteHandlers(req));

	for (let i = 0; i < handlers.length; i++) {
		if (res.headersSent) {
			break;
		}
		if (nextCalled) {
			nextCalled = false;
			handlers[i](req, res, next);
		}
	}	
}

handlerWrapper.use = use;
handlerWrapper.get = get;
handlerWrapper.post = post;
handlerWrapper.put = put;
handlerWrapper.del = del;

function PureHTTP() {
	const server = http.createServer(handlerWrapper);
	handlerWrapper.listen = serverListen.bind(server);
	return handlerWrapper;
}

module.exports = PureHTTP;
