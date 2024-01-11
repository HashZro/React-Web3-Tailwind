// Ethereum Mainnet
export const ethMainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// Ethereum Testnet
export const ethSepolia = {
  chainId: 11155111,
  name: "Sepolia Eth",
  currency: "SepEth",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: "wss://ethereum-sepolia.publicnode.com",
};

// Binance Smart Chain Mainnet
export const bnbMainnet = {
  chainId: 56,
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc-dataseed.binance.org/",
};

// Binance Smart Chain Testnet (BSC Testnet)
export const bnbTestnet = {
  chainId: 97,
  name: "Binance Smart Chain Testnet",
  currency: "BNB",
  explorerUrl: "https://testnet.bscscan.com",
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

// Polygon Mainnet
export const polygonMainnet = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://rpc-mainnet.matic.network",
};

// Polygon Testnet
export const polygonTestnet = {
  chainId: 80001,
  name: "Polygon Testnet",
  currency: "MATIC",
  explorerUrl: "https://mumbai.polygonscan.com",
  rpcUrl: "https://rpc-mumbai.matic.today",
};

// Avalanche Mainnet
export const avalancheMainnet = {
  chainId: 43114,
  name: "Avalanche",
  currency: "AVAX",
  explorerUrl: "https://cchain.explorer.avax.network/",
  rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
};

// Avalanche Fuji C-Chain Testnet
export const avalancheTestnet = {
  chainId: 43113,
  name: "Avalanche Fuji C-Chain Testnet",
  currency: "AVAX",
  explorerUrl: "https://cchain.explorer.avax-test.network/",
  rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
};
