const middlewares = [];

module.exports.use = function (callback) {
	if (typeof callback === 'function') {
		middlewares.push(callback);
	}
	return this;
}

module.exports.getMiddlewares = () => middlewares.slice();
