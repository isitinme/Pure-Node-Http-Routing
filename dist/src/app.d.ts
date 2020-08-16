/// <reference types="node" />
import { ServerResponse, IncomingMessage } from 'http';
declare function handlerWrapper(req: IncomingMessage, res: ServerResponse): void;
declare namespace handlerWrapper {
    var use: typeof import("./middlewares").use;
    var get: typeof import("./routing").get;
    var post: typeof import("./routing").post;
    var put: typeof import("./routing").put;
    var del: typeof import("./routing").del;
    var start: (port: number, callback?: (() => void) | undefined) => void;
}
export declare function PureHTTP(): typeof handlerWrapper;
export {};
