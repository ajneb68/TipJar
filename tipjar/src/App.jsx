import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "./TipJar.json"; // ABI file copied into src
import "./index.css";

const contractAddress = "0xe6751A32Fdb97F35b48A037F6842ef88Be61Ed6B"; // Replace with deployed TipJar address

function App() {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("0");

  // Connect wallet
  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected request:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it!");
    }
  }

  // Get contract
  function getContract() {
    if (!window.ethereum) return null;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI.abi, signer);
  }

  // Send a tip
  async function sendTip() {
    if (!amount) return alert("Enter an amount!");
    try {
      const contract = getContract();
      const tx = await contract.sendTip({
        value: ethers.parseEther(amount),
      });
      await tx.wait();
      setAmount("");
      fetchBalance();
      alert("Tip sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed!");
    }
  }

  // Fetch contract balance
  async function fetchBalance() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(contractAddress);
      setBalance(ethers.formatEther(balance));
    } catch (err) {
      console.error("Failed to fetch balance:", err);
    }
  }

  useEffect(() => {
    if (account) fetchBalance();
  }, [account]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-6">💜 TipJar DApp</h1>
      <p className="mb-6 max-w-lg text-center">
        Welcome to the <span className="font-semibold">TipJar</span>! Connect
        your wallet and send tips in ETH to support the creator. You can also
        check the current balance of the TipJar below.
      </p>

      {!account ? (
        <button
          onClick={connectWallet}
          className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="w-full max-w-md bg-white/10 rounded-xl shadow-xl p-6">
          <p className="mb-4">
            <strong>Connected Wallet:</strong> {account}
          </p>
          <p className="mb-6">
            <strong>Contract Balance:</strong> {balance} ETH
          </p>

          <input
            type="number"
            placeholder="Enter amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-lg text-black"
          />

          <button
            onClick={sendTip}
            className="w-full bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Send Tip
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

