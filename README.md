# User Authentication, Posts API
An API of User Authentication and post trackings. It can be used in variety of Applications like blog websites, Chat Messaging services etc.


# Setup
## Configuration:
* First Create a config directory at root of project
* Create a TS File named Default.ts
* export default the Config from here

## Sample `Default.ts`:
```json
	export default {
		"port": "PORT_ADDRESS",
		"host": "HOST_ADDRESS",
		"dbUri": "DATABASE_CONNECTION_STRING",
		"saltWorkFactor": 10,
		"accessTokenTt": "15m",
		"refreshTokenTtl": "1y",
		"privateKey": "PRIVATE_KEY TO SIGN TOKENS"
	}
	
```

## Node:
* Run `npm install` or `yarn install` from project root directory.
* Finally run `npm run dev` or `yarn dev` from project root directory to run the API Server.

## Note 
* Pass the access Tokens and Refresh Tokens at every request where user is to be validated.
* Getting error 403, First Login to API and then try to modify the data.