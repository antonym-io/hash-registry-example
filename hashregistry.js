var rp = require('request-promise');

const apiroot = "https://vlmf7pt9fe.execute-api.us-west-2.amazonaws.com/Beta/hash/";

const apikey = "12345678";


function isRegistered(value) {
	let uri = apiroot + value;

	console.log("Request URI:");
	console.log(uri);

	return rp(uri)
		.then(function(htmlString) {
			return JSON.parse(htmlString);
		})
		.catch(function(err) {
			console.log("Error!: " + err);
			return { "result": "error", "errmsg": err}
	});
}


function addHash(value) {
	var uri = apiroot + "?apikey=" + apikey;

	var options = {
	    method: 'POST',
	    uri: uri,
	    body: {
	    	"hashval" : value
	    },
	    json: true
	};

	return rp(options)
	    .then(function (obj) {
	    	return obj;
	    })
	    .catch(function (err) {
	    	console.log("ERROR!: " + err);
	    	let retval = { "result" : "failed"};
	    	return retval;
	});
}


exports.isRegistered = isRegistered;
exports.addHash = addHash;

