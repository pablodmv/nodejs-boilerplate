const { Request, Response } = require("express");

const apiAlive = (req, res) => {
	const response = {
		message: "Este es el index",
	};
	res.json(response);
};

const apiPing = (req, res) => {
	const { data } = req.body;
	console.log(data);
	const response = {
		data,
	};
	res.json(response);
};

const apiSample = (req, res) => {
	const { name, description } = req.body;
	const response = {
		name,
		description,
	};
	res.json(response);
};

module.exports = {
	apiAlive,
	apiPing,
	apiSample,
};
