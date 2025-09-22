const hre = require("hardhat");

async function main() {
  const TipJar = await hre.ethers.getContractFactory("TipJar");
  const tipjar = await TipJar.deploy();
  await tipjar.deployed();

  console.log("✅ TipJar deployed to:", tipjar.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
