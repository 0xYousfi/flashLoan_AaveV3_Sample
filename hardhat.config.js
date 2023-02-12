require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(".env.example")



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version : "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
  networks: {
    goerli : {
      url : process.env.INFURA_GOERLI_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
