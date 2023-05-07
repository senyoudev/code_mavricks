export interface TokenAddressMap {
  [key: number]: string;
}

export interface TokenSymbolMap {
  [key: number]: string;
}

export const TOKEN_ADDRESS_MAP: TokenAddressMap = {
  1: "0x1234567890123456789012345678901234567890", // Ethereum Mainnet
  3: "0x1234567890123456789012345678901234567890", // Ropsten Testnet
  4: "0x1234567890123456789012345678901234567890", // Rinkeby Testnet
  5: "0x1234567890123456789012345678901234567890", // Goerli Testnet
  42: "0x1234567890123456789012345678901234567890", // Kovan Testnet
  137: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0", // Matic Mainnet - WMATIC
  80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // Matic Testnet - WMATIC
};

export const TOKEN_SYMBOL_MAP: TokenSymbolMap = {
  1: "ETH", // Ethereum Mainnet
  3: "ROP", // Ropsten Testnet
  4: "RIN", // Rinkeby Testnet
  5: "GOL", // Goerli Testnet
  42: "KOV", // Kovan Testnet
  137: "MATIC", // Matic Mainnet
  80001: "MATIC", // Matic Testnet
};
