var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");

app.use(bodyParser.urlencoded({
		extended: false
	}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
var request = require('request');

router.get('/api/items', function (req, res) {
	request.get({
		"headers": {
			"content-type": "application/json"
		},
		"url": "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.q
	}, (error, response, body) => {
		if (error) {
			return console.dir(error);
		}
		res.send(parseResponse(JSON.parse(body)));
	});
});

app.use(router);

app.listen(3000, function () {
	console.log("Node server running on http://localhost:3000");
});

function parseResponse(response) {
	var responseParsed = {
		"author": {
			"name": "author_name",
			"lastname": "author_lastname"
		},
		categories: ["caterory_1", "caterory_2", "caterory_3"],
		items: [
		]
	};

	for (var i = 0; i < response.results.length; i++) {

		var newItem = response.results[i];

		responseParsed.items.push({
			"id": newItem.id,
			"title": newItem.title,
			"price": {
				"currency": newItem.currency_id,
				"amount": Math.floor(newItem.price),
				"decimals": Math.round(newItem.price % 1 * 100) / 100
			},
			"picture": newItem.thumbnail,
			"condition": newItem.condition,
			"free_shipping": newItem.shipping.free_shipping
		});
	}
	
	return responseParsed;
}
