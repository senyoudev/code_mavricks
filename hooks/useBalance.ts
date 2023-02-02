import { useState,useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";


function useBalance() {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (account) {
      library.getBalance(account).then((val:any) => setBalance(val));
    }
  }, [account, library]);

  return balance ? `${formatEther(balance)} ETH` : null;
}


export default useBalance