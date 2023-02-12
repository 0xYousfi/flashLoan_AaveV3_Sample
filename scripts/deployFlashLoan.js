const hre = require("hardhat");

async function main() {

  const flashLoan = await hre.ethers.getContractFactory('flashLoan');
  const flashloan = await flashLoan.deploy('0xC911B590248d127aD18546B186cC6B324e99F02c' );

  await flashloan.deployed();

  console.log('Flash loan contract deployed :', flashloan.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
