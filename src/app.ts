import {createServer, ServerResponse, IncomingMessage} from 'http';

import {get, post, put, del, findRouteHandlers} from './routing';
import {use, getMiddlewares} from './middlewares';
import {serverListen} from './server';
import {ExtendedIncomingMessage} from './interface';

function handlerWrapper(req: IncomingMessage, res: ServerResponse): void {
	(req as ExtendedIncomingMessage).state = {};

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
handlerWrapper.start = (port: number, callback?: () => void) => {};

export function PureHTTP() {
	const server = createServer(handlerWrapper);
	handlerWrapper.start = serverListen.bind(null, server);
	return handlerWrapper;
}
