# Simple Pure Dependless Node Micro HTTP Framework

TL;DR;
```
const PureHTTP = require('../src/app');

const app = PureHTTP();

app.get('/api/user', (req, res) => res.end('Hello!'));

app.post('/data', (req, res) => req.pipe(res));

app.listen(8080);
```

```
$ curl http://localhost:8080
$ Hello!

$ curl -XPOST --data 'ABC' http://localhost:8080
$ ABC
```

## More examples:
[HERE](https://github.com/isitinme/Pure-Node-Http-Routing/blob/master/docs/example.js)

## Features:
* Middlewares support
* GET, POST, PUT, DELETE support

## Note!
No async support by this time. Just plain synchonous js execution. Made for fun.
