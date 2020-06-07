const express = require('express');
const router = require('./routes/api');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', router);

var port = 4000;
app.listen(process.env.port || port, () => {
	console.log("Listening... ");
});	