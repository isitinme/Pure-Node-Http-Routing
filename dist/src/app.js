"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PureHTTP = void 0;
const http_1 = require("http");
const routing_1 = require("./routing");
const middlewares_1 = require("./middlewares");
const server_1 = require("./server");
function handlerWrapper(req, res) {
    req.state = {};
    let nextCalled = true;
    const next = () => {
        nextCalled = true;
    };
    const handlers = middlewares_1.getMiddlewares().concat(routing_1.findRouteHandlers(req));
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
handlerWrapper.use = middlewares_1.use;
handlerWrapper.get = routing_1.get;
handlerWrapper.post = routing_1.post;
handlerWrapper.put = routing_1.put;
handlerWrapper.del = routing_1.del;
handlerWrapper.start = (port, callback) => { };
function PureHTTP() {
    const server = http_1.createServer(handlerWrapper);
    handlerWrapper.start = server_1.serverListen.bind(null, server);
    return handlerWrapper;
}
exports.PureHTTP = PureHTTP;
