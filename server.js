const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
	res.send([
		{
			id: 1,
			image: "https://placeimg.com/64/64/any",
			name: "gmk",
			birthday: 830520,
			gender: "male",
			job: "baksu",
		},
		{
			id: 2,
			image: "https://placeimg.com/64/64/1",
			name: "tk",
			birthday: 830000,
			gender: "male",
			job: "baksu",
		},
		{
			id: 3,
			image: "https://placeimg.com/64/64/2",
			name: "sb",
			birthday: 840120,
			gender: "male",
			job: "Golfer",
		},
	]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
