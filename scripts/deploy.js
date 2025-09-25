// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const TipJar = await hre.ethers.getContractFactory("TipJar");
  const tipjar = await TipJar.deploy();

  // ✅ ethers v6 way to wait for deployment
  await tipjar.waitForDeployment();

  console.log("TipJar deployed to:", await tipjar.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

