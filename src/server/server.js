var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");

const cors = require("cors");

app.use(bodyParser.urlencoded({
		extended: false
	}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(cors());

var router = express.Router();
var request = require('request');

/*******************************************************/
/******************** SEARCH LIST **********************/
/*******************************************************/

var quantityOfResults = 4;

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
		res.send(parseResultsList(JSON.parse(body)));
	});
});

function parseResultsList(response) {
	var responseParsed = {
		"author": {
			"name": "author_name",
			"lastname": "author_lastname"
		},
		categories: [],
		items: []
	};

	if(response.filters.length > 0 && response.filters[0].values.length > 0)
	{
		responseParsed.categories = response.filters[0].values[0].path_from_root.map(function(item){
			return item.name;
		});
	}

	for (var i = 0; i < response.results.length && i < quantityOfResults; i++) {

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
			"free_shipping": newItem.shipping.free_shipping,
			"location": newItem.address.state_name
		});
	}
	
	return responseParsed;
}

/*******************************************************/
/*********************** ITEMS *************************/
/*******************************************************/

function createItemRequest(url){
	return new Promise((resolve, reject) => {
    	request.get({
			"headers": {
				"content-type": "application/json"
			},
			"url": url
		}, (error, response, body) => {
			if (error) {
				reject(error);
			} else {
				resolve(JSON.parse(body));	
			}
		});
	});
};

function getGeneralItemData(itemID) {
	var url = "https://api.mercadolibre.com/items/" + itemID;
	return createItemRequest(url);
};

function getDescriptionItemData(itemID) {
	var url = "https://api.mercadolibre.com/items/" + itemID + "/description";
	return createItemRequest(url);
};

function parseGeneralData(data) {
	return {
		item: {
			id: data.id,
			title: data.title,
			price: {
				currency: data.currency_id,
				amount: Math.floor(data.price),
				decimals: Math.round(data.price % 1 * 100) / 100
			},
			picture: data.pictures[0].url,
			condition: data.condition,
			free_shipping: data.shipping.free_shipping,
			sold_quantity: data.sold_quantity
		}
	};
};


router.get('/api/items/:id', function(req, res) {
	Promise.all([getGeneralItemData(req.params.id), getDescriptionItemData(req.params.id)])
	.then(([generalResults, descriptionResult]) => {
		var parsedGeneralData = parseGeneralData(generalResults);
		parsedGeneralData.item.description = descriptionResult.plain_text;

		res.send(parsedGeneralData);
	})
	.catch(err => res.send(err))
});

/*******************************************************/
/*******************************************************/
/*******************************************************/

app.use(router);

app.listen(3000, function () { 
	console.log("Node server running on http://localhost:3000");
});