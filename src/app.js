const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const http = require('http');
const socket = require('socket.io');
const router = require('./routes');

const app = express();
const port = 5000;
const server = http.createServer(app);
const io = socket(server);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use((err) => console.error(err));

io.on('connection', (socket) => {
	console.log('connection', socket);
	socket.on('disconnect', () => console.log('user disconnect'));
});

mongoose
	.connect(
		'mongodb+srv://test:test123@cluster0.1gsip.mongodb.net/oauth-passport?retryWrites=true&w=majority',
		{ useUnifiedTopology: true, useNewUrlParser: true }
	)
	.then(() => {
		server.listen(port, () =>
			console.log('server listening on port ' + port)
		);
	})
	.catch((err) => console.log(err));
