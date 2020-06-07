const express = require('express');
const router = require('./routes/api')	
const app = express();

app.use('/api', router);

var port = 4000;
app.listen(process.env.port || port, () => {
	console.log("Listening... ");
});	