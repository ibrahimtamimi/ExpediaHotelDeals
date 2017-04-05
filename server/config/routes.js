var request = require('request');

module.exports = function(app, express) {
	
	app.get('/', function (req, res) {
		request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function (error, response, body) {
		  console.log('error:', error); // Print the error if one occurred 
		  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
		  //console.log('body:', body); // Print the HTML for the Google homepage. 
		  res.json(JSON.parse(body))
		});
	});
};
