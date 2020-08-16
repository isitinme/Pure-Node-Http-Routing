"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddlewares = exports.use = void 0;
const middlewares = [];
function use(callback) {
    if (typeof callback === 'function') {
        middlewares.push(callback);
    }
}
exports.use = use;
function getMiddlewares() {
    return middlewares.slice();
}
exports.getMiddlewares = getMiddlewares;
