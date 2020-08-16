/// <reference types="node" />
import { Handler } from '../interface';
import { IncomingMessage } from 'http';
export declare function findRouteHandlers(req: IncomingMessage): Handler[];
export declare function get(pathname: string, ...handlers: Handler[]): void;
export declare function post(pathname: string, ...handlers: Handler[]): void;
export declare function put(pathname: string, ...handlers: Handler[]): void;
export declare function del(pathname: string, ...handlers: Handler[]): void;
