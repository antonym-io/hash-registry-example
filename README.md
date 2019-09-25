# hash-registry-example
Example code for interacting with the Antonym HashRegistry™ service


This repository contains example code for how to use node.js to interact with the Antonym HashRegistry™ service.


# API Key

Adding a hash value to the Antonym HashRegistry™ service requires use of an API key.  Our example code uses the testing API key of "12345678"; you can feel free to perform your own testing against the Antonym HashRegistry™ API with that testing key, but be aware that any hashes posted to the API with that API key may be subject to deletion with no prior notice.  

For an API key linked specifically to your enterprise and to have the guarantee of persistence, please contact Antonym to get an API key for your enterprise.


# Interface Mechanism

Interacting with the Antonym HashRegistry™ service is done through a RESTful API interface.  We are constantly extending and expanding this RESTful API to support additional features and functionality.  The service is currently in Beta; we will be extending our functionality and adding additional examples very soon.


# Checking a Hash Value

Checking whether or not a hash has been previously registered (by any registrant) is as simple as performing a GET request against an API.  Specifically, a request against the base URI of https://vlmf7pt9fe.execute-api.us-west-2.amazonaws.com/Beta/hash/ appended with the hex value of your hash can be performed without an API key and will check whether or not a hash value has already been registered.  As an example, we have previously registered a hash value of *0x815db7eb4c3732fe399007311e149ef1fcd7b40265e034fbb53c05bd40464069*; you can check against it by going to the link of https://vlmf7pt9fe.execute-api.us-west-2.amazonaws.com/Beta/hash/0x815db7eb4c3732fe399007311e149ef1fcd7b40265e034fbb53c05bd40464069 with your web browser.


# Registering a Hash Value

Registering a hash value can be done by making an HTTP POST to the base URI of https://vlmf7pt9fe.execute-api.us-west-2.amazonaws.com/Beta/hash/ with a JSON body set with "hashval" equal to your hash value, and with a querystring variable of "apikey" set to your API Key.  (You can test the hash value addition process using the testing API key of "12345678".)


# Command-line tools

In this GitHub repository we provide command line tools that provide examples of how to interact with the Antonym HashRegistry™ service via Node.js, and which can be used from the command line to both register and check hash values. 

To use these tools, you must have node.js installed.

To check if a hash value has been previously registered, use:
	

	node index isreg 0x815db7eb4c3732fe399007311e149ef1fcd7b40265e034fbb53c05bd40464069


To register a new hash value, use:
	

	node index addhash 0x815db7eb4c3732fe399007311e149ef1fcd7b40265e034fbb53c05bd40464069


(Please note that the above "addhash" call will fail because the hash has been previously registered; to test the hash registration process, you can simply modify one of the digits in that hash above to another hex digit.)

These command line tools use the testing API Key of "12345678"; to use this code with your own enterprise-specific API Key, you can copy the code in hashregistry.js and replace the value of the "apikey" variable with your API key.




