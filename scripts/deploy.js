const hre = require("hardhat");


async function main() {


    const easyTransfer = await hre.ethers.getContractFactory("Transfer");


    const contract = await easyTransfer.deploy();   //instance of contract


    await contract.deployed();   //contract deployed on hardhat network


    console.log("Address of contract", contract.address);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

