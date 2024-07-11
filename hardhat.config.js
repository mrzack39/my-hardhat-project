require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    sepolia: {
      url: "https://eth-sepolia.alchemyapi.io/v2/TY0KzPbjOFc2_DEzAuCY4663X9AhWreUR",
      accounts: [`0x${"860e5f15a88c8080f15bbd35d4cb38b3c1639f85b0421d32f4e6400548516086"}`]
    }
  }
};


