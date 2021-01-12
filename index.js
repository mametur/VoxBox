// this is the main entry point for your full app
// it serves your frontend & provides access to your API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./api/server');

const app = express();
app.use(cors());
app.use(bodyParser.json());
// add middlewares
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static('client/build'));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
