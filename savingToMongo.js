const express = require('express');
const router = require('./routes/api')	
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
	mongoose.connection.once('open', () => {
		console.log('Connected to mongoose',);
	}).on('error', (err)=>{
		console.log('Error: ', error);
	});	

app.use('/api', router);

var port = 4000;
app.listen(process.env.port || port, () => {
	console.log("Listening... ");
});	