# ☕ TipJar DApp

A decentralized **Tip Jar application** built with **Solidity, Hardhat, React (Vite), TailwindCSS, and Ethers.js**.  
Users can send small ETH tips, and the contract owner can withdraw them.

---

## ⚡ Tech Stack
- **Solidity** – Smart contract for storing tips  
- **Hardhat** – Development framework for Ethereum  
- **React (Vite)** – Frontend framework  
- **TailwindCSS** – Styling  
- **Ethers.js** – Interacting with the smart contract  
- **MetaMask** – Wallet connection  

---

## 📂 Project Structure
```
TipJarDapp/
├── contracts/
│   └── TipJar.sol              # Solidity smart contract
├── scripts/
│   └── deploy.js               # Hardhat deployment script
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main React app
│   │   ├── abis/TipJar.json    # ABI file (copied after compilation)
│   │   └── index.css           # TailwindCSS styles
│   ├── index.html
│   └── package.json
├── hardhat.config.js
└── README.md
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Usernyagah/tipjar-dapp.git
cd tipjar-dapp
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Compile contracts
```bash
npx hardhat compile
```

### 4️⃣ Deploy contract to Core Testnet
Update your `.env` with your **private key** and **Core Testnet RPC URL**:

```env
PRIVATE_KEY=your_wallet_private_key
CORE_RPC=https://rpc.test.btcs.network
```

Run the deployment:
```bash
npx hardhat run scripts/deploy.js --network coretestnet
```

```
TipJar deployed to: 0xe6751A32Fdb97F35b48A037F6842ef88Be61Ed6B

```

Copy this contract address.

---

## 🎨 Frontend Setup

### 5️⃣ Move to frontend folder
```bash
cd frontend
npm install
```

### 6️⃣ Update contract address
Open `src/App.jsx` and replace:
```javascript
const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

with your deployed contract address.

### 7️⃣ Start frontend
```bash
npm run dev
```

Visit **http://localhost:5173** 🎉

---

## 🛠️ Features
- ✅ Send ETH tips  
- ✅ Owner can withdraw tips  
- ✅ Display contract balance  
- ✅ Simple UI with TailwindCSS  

---

## 📸 Screenshots

Below are screenshots of the TipJar app UI:

![Screenshot 1](tipjar/src/assets/Screenshot%20from%202025-09-28%2017-06-11.png)
![Screenshot 2](tipjar/src/assets/Screenshot%20from%202025-09-28%2017-06-33.png)

---

## 📜 License
MIT License
