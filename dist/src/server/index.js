"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverListen = void 0;
function serverListen(server, port, callback = () => console.log('Server is listening on port', port)) {
    server.listen(port, callback);
}
exports.serverListen = serverListen;
