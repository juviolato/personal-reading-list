const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database/db');

const fanfictionRoute = require('./routes/fanfiction.routes');
const categoryRoute = require('./routes/category.routes');
const bookRoute = require('./routes/books.routes');
const webtoonRoute = require('./routes/webtoons.routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
	useNewUrlParser: true
}).then(() => {
	console.log('Database connected successfully');
},
	error => {
		console.log('Database failed to connect: ' + error);
	}
);

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.use('/api/fanfiction', fanfictionRoute);
app.use('/api/category', categoryRoute);
app.use('/api/books', bookRoute);
app.use('/api/webtoons', webtoonRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
	console.log('Server connected to port ' + port);
});

app.use((req, res, next) => {
	console.error('404');
});

app.use(function (err, req, res, next) {
	console.error(err.message);
	if (!err.statusCode) {
		err.statusCode = 500;
	}
	res.status(err.statusCode).send(err.message);
})
