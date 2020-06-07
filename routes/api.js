const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninja', (req, res) => {
	res.send({request: 'get'});
});

router.post('/ninja', (req, res) => {
	var ninja = new Ninja(req.body);
	console.log(req.body);
	ninja.save().then((record) => {
		res.send(record);	
	});
	
});

router.delete('/ninja/:id', (req, res) => {
	res.send({request: 'delete'});
});

router.put('/ninja/:id', (req, res) => {
	res.send({request: 'put'});
});

module.exports = router
