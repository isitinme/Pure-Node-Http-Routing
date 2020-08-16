const notFoundHandler = require('./notFound');
const validate = require('./validate');

const routes = {
	get: [],
	post: [],
	put: [],
	delete: [],
};

module.exports.findRouteHandlers = (req) => {
	const handlers = routes[req.method.toLowerCase()]
		.filter(({pathname}) => pathname === req.url)
		.flatMap(({handlers}) => handlers);

	handlers.push(notFoundHandler());

	return handlers;
};

module.exports.get = (pathname, ...handlers) => {
	validate(pathname, handlers);
	routes.get.push({pathname, handlers});
};

module.exports.post = (pathname, ...handlers) => {
	validate(pathname, handlers);
	routes.post.push({pathname, handlers});
};

module.exports.put = (pathname, ...handlers) => {
	validate(pathname, handlers);
	routes.put.push({pathname, handlers});
};

module.exports.del = (pathname, ...handlers) => {
	validate(pathname, handlers);
	routes.delete.push({pathname, handlers});
};
