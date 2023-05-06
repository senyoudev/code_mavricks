import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

interface TokenAddressMap {
  [key: number]: string;
}

interface TokenSymbolMap {
  [key: number]: string;
}

const TOKEN_ADDRESS_MAP: TokenAddressMap = {
  1: "0x1234567890123456789012345678901234567890", // Ethereum Mainnet
  3: "0x1234567890123456789012345678901234567890", // Ropsten Testnet
  4: "0x1234567890123456789012345678901234567890", // Rinkeby Testnet
  5: "0x1234567890123456789012345678901234567890", // Goerli Testnet
  42: "0x1234567890123456789012345678901234567890", // Kovan Testnet
  137: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0", // Matic Mainnet - WMATIC
  80001: "0x9c3c9283d3e44854697cd22d3faa240cfb032889", // Matic Testnet - WMATIC
};

const TOKEN_SYMBOL_MAP: TokenSymbolMap = {
  1: "ETH", // Ethereum Mainnet
  3: "ROP", // Ropsten Testnet
  4: "RIN", // Rinkeby Testnet
  5: "GOL", // Goerli Testnet
  42: "KOV", // Kovan Testnet
  137: "MATIC", // Matic Mainnet
  80001: "MATIC", // Matic Testnet
};

function useBalance() {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState();
  const [symbol, setSymbol] = useState<string | null>(null);

  useEffect(() => {
    if (account) {
      library.getBalance(account).then((val: any) => setBalance(val));
      const tokenSymbol = TOKEN_SYMBOL_MAP[chainId!] ?? chainId!.toString();
      setSymbol(tokenSymbol);
    }
  }, [account, library]);

  return balance ? `${formatEther(balance)} ${symbol}` : null;
}

export default useBalance;
