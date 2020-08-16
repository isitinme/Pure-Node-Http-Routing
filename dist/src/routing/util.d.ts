/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { Handler } from '../interface';
export declare function notFoundHandler(req: IncomingMessage, res: ServerResponse): void;
export declare function validate(pathname: string, handlers: Handler[]): void | never;
