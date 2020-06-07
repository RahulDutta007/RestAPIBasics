const express = require('express');

const app = express();


app.get('/', (req, res) => {
	res.send({request: 'get'});
});

app.post('/', (req, res) => {
	res.send({request: 'post'});
});

var port = 4000;
app.listen(process.env.port || port, () => {
	console.log("Listening... ");
});	