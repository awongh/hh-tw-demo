import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const runMain = () => {
  try {

    const sdk = ThirdwebSDK.fromPrivateKey( process.env.PRIVATE_KEY, 'http://127.0.0.1:8545');
    console.log( sdk );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
