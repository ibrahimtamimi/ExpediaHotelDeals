var request = require('request');
var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
	


module.exports = function(app, express) {
	
	app.get('/api/data', function (req, res) {
		request(url, function (err, response, body) {
		  if (err){
		  	throw err;
		  }else{
     		res.json(JSON.parse(body))
		  }
		});
	})


};
