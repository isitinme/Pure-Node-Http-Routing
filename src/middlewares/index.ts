import {Handler} from '../interface';

const middlewares: Handler[] = [];

export function use(callback: Handler) {
	if (typeof callback === 'function') {
		middlewares.push(callback);
	}
}

export function getMiddlewares(): Handler[] {
	return middlewares.slice();
}
