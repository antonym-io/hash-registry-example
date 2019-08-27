var hr = require('./hashregistry.js');

const method = process.argv[2];
const address = process.argv[3];


if (method == "isreg") {
	console.log("isRegistered for address:" + address);

	hr.isRegistered(address)
		.then( (retval) => {
			console.log("Returned value of " + retval);
		});
} else if (method == "addhash") {
	console.log("addHash for address: " + address);

	hr.addHash(address)
		.then( (retval) => {
			console.log("addHash returned value of " + JSON.stringify(retval));
		});
}

