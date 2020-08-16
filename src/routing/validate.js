module.exports = (pathname, handlers) => {
	if (typeof pathname !== 'string') {
		throw new Error(`Provided pathname "${pathname}" must be a string`);
	}
	handlers.forEach((handler) => {
		if (typeof handler !== 'function') {
			throw new Error(`One of provided handlers for "${pathname}" is not a function`);
		}
	});
};
