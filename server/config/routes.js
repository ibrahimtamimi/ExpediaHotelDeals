var request = require('request');
var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
	
var getData = function (type, param, value, res) {
	request(url + '&' +type || '' + param + '=' + value, function (err, response, body) {
		if (err) {
			throw err;
		}else{
			res.json(JSON.parse(body));
		}
	})
}

module.exports = function(app, express) {
	
	app.get('/api/data', function (req, res) {
		request(url, function (err, response, body) {
		  if (err){
		  	throw err;
		  }else{
     		res.json(JSON.parse(body))
		  }
		});
	}),

	// regionIds
	app.post('/api/dataId', function (req, res) {
		getData('','regionIds', req.body.location, res );
	}),

	//minTripStartDate
	 app.post('/api/dataByMinDate', function (req, res) {
		getData('min','TripStartDate', req.body.date, res )
	}),

	//maxTripStartDate
	app.post('/api/dataByMaxDate', function (req, res) {
		getData('max','TripStartDate', req.body.date, res )
	}),

	// minStarRating
	app.post('/api/dataByStarRating', function (req, res) {
		getData('min','StarRating', req.body.rate, res )
	}),

	// maxStarRating
	app.post('/api/dataByStarRating', function (req, res) {
		getData('max','StarRating', req.body.rate, res )
	}),
	
	// maxTotalRate
	app.post('/api/dataByTotalRate', function (req, res) {
		getData('max','TotalRate', req.body.tRate, res )
	}),

	// minTotalRate
	app.post('/api/dataByTotalRate', function (req, res) {
		getData('min','TotalRate', req.body.tRate, res )
	}),
	
	// maxGuestRating
	app.post('/api/dataByGuestRating', function (req, res) {
		getData('max','GuestRating', req.body.gRate, res )
	}),

	// maxGuestRating
	app.post('/api/dataByGuestRating', function (req, res) {
		getData('min','GuestRating', req.body.gRate, res )
	})
};
