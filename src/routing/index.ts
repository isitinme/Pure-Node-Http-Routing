import {notFoundHandler, validate} from './util';

import {Routes, HTTPListener} from './interface';
import {Handler} from '../interface';
import {IncomingMessage} from 'http';

const routes: Routes = {
	get: [],
	post: [],
	put: [],
	delete: [],
}

export function findRouteHandlers(req: IncomingMessage): Handler[] {
	const method = (req.method as string).toLowerCase();
	if (!routes[method]) {
		throw new Error(`Routing does not support method ${method}`);
	}

	const handlers = routes[method]
		.filter(({pathname}) => pathname === req.url)
		.flatMap(({handlers}: HTTPListener) => handlers);

	handlers.push(notFoundHandler);

	return handlers;
}

export function get(pathname: string, ...handlers: Handler[]) {
	validate(pathname, handlers);
	routes.get.push({pathname, handlers});
}

export function post(pathname: string, ...handlers: Handler[]) {
	validate(pathname, handlers);
	routes.post.push({pathname, handlers});
};

export function put(pathname: string, ...handlers: Handler[]) {
	validate(pathname, handlers);
	routes.put.push({pathname, handlers});
};

export function del(pathname: string, ...handlers: Handler[]) {
	validate(pathname, handlers);
	routes.delete.push({pathname, handlers});
};
