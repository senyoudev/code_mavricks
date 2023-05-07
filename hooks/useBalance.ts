import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";
import { TOKEN_SYMBOL_MAP } from "../data/tokensInfos";


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
