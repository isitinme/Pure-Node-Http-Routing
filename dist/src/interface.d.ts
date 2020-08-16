/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
export interface Handler {
    (req: IncomingMessage, res: ServerResponse, next: () => void): void;
}
export interface ExtendedIncomingMessage extends IncomingMessage {
    state: {
        [key: string]: any;
    };
}
