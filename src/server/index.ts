import {Server} from 'http';

export function serverListen(
	server: Server,
	port: number,
	callback = () => console.log('Server is listening on port', port)
) {
	server.listen(port, callback);
}
