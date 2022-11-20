const dotenv = require('dotenv')
const path = require('path');
const ThirdwebSDK = require('@thirdweb-dev/sdk');

// Importing and configuring our .env file that we use to securely store our environment variables
dotenv.config({ path: path.resolve(__dirname, './.env') });
dotenv.config();

module.exports = {
  solidity: "0.8.17",
};
