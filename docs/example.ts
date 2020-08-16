import {PureHTTP} from '../src/app';
import {ExtendedIncomingMessage} from '../src/interface';

const app = PureHTTP();

app.use((req, res, next) => {
	console.log(
		'METHOD: %s\nURL: %s',
		req.method,
		req.url,
	);
	next();
});

app.use((req, res, next) => {
	(req as ExtendedIncomingMessage).state.email = 'alex@gmail.com';
	(req as ExtendedIncomingMessage).state.userId = '12345';
	next();
});

app.get('/api/user', (req, res) => {
	const {
		state: {email, userId},
	} = req as ExtendedIncomingMessage;
	res.end(JSON.stringify({email, userId}));	
});

app.post('/api/user', (req, res) => {
	req.pipe(res);
});

app.put('/api/user', (req, res) => {
	const {url, method} = req;
	res.end(JSON.stringify({url, method}));
});

app.del('/api/user', (req, res) => {
	const {url, method} = req;
	res.end(JSON.stringify({url, method}));
});

app.start(8080);
