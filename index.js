// this is the main entry point for your full app
// it serves your frontend & provides access to your API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
let cookieParser = require('cookie-parser');
//setup express app
let app = express();

app.use(cookieParser());

const api = require('./api/server');

app.use(cors());
app.use(bodyParser.json());

// app.use((req, res, next) => {
// 	console.log(req.method + ': ' + req.path);
// 	next();
// });

// app.use('/', express.static(__dirname + '/client/build/'))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/client/build/index.html');
// });
app.use('/api', api);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
