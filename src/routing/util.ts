import {IncomingMessage, ServerResponse} from 'http';
import {Handler} from '../interface';

export function notFoundHandler(req: IncomingMessage, res: ServerResponse) {
	res.statusCode = 404;
	res.end('Not found');
}

export function validate(pathname: string, handlers: Handler[]): void | never {
	if (typeof pathname !== 'string') {
		throw new Error(`Provided pathname "${pathname}" must be a string`);
	}
	handlers.forEach((handler) => {
		if (typeof handler !== 'function') {
			throw new Error(`One of provided handlers for "${pathname}" is not a function`);
		}
	});
};
