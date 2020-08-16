"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.notFoundHandler = void 0;
function notFoundHandler(req, res) {
    res.statusCode = 404;
    res.end('Not found');
}
exports.notFoundHandler = notFoundHandler;
function validate(pathname, handlers) {
    if (typeof pathname !== 'string') {
        throw new Error(`Provided pathname "${pathname}" must be a string`);
    }
    handlers.forEach((handler) => {
        if (typeof handler !== 'function') {
            throw new Error(`One of provided handlers for "${pathname}" is not a function`);
        }
    });
}
exports.validate = validate;
;
