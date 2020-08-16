"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = exports.findRouteHandlers = void 0;
const util_1 = require("./util");
const routes = {
    get: [],
    post: [],
    put: [],
    delete: [],
};
function findRouteHandlers(req) {
    const method = req.method.toLowerCase();
    if (!routes[method]) {
        throw new Error(`Routing does not support method ${method}`);
    }
    const handlers = routes[method]
        .filter(({ pathname }) => pathname === req.url)
        .flatMap(({ handlers }) => handlers);
    handlers.push(util_1.notFoundHandler);
    return handlers;
}
exports.findRouteHandlers = findRouteHandlers;
function get(pathname, ...handlers) {
    util_1.validate(pathname, handlers);
    routes.get.push({ pathname, handlers });
}
exports.get = get;
function post(pathname, ...handlers) {
    util_1.validate(pathname, handlers);
    routes.post.push({ pathname, handlers });
}
exports.post = post;
;
function put(pathname, ...handlers) {
    util_1.validate(pathname, handlers);
    routes.put.push({ pathname, handlers });
}
exports.put = put;
;
function del(pathname, ...handlers) {
    util_1.validate(pathname, handlers);
    routes.delete.push({ pathname, handlers });
}
exports.del = del;
;
