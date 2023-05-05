import { useEffect, useMemo, useState } from "react";
import { AddressZero } from "@ethersproject/constants";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

type ContractJson = {
  networks: Record<string, { address: string }>;
  abi: any[];
};

type UseContractResult = {
  contract?: any;
  address: string;
  error: string;
};

export function useContract(contractJson: ContractJson): UseContractResult {
  const [address, setAddress] = useState<string>(AddressZero);
  const [instance, setInstance] = useState<any>();
  const [error, setError] = useState<string>("");
  const { library, account, chainId } = useWeb3React();
  const signerOrProvider = account
    ? library.getSigner(account).connectUnchecked()
    : library;

  useEffect(() => {
    const { ethereum } = window;

    if (!ethereum) {
      setError("No Ethereum provider found.");
      setAddress("");
      setInstance(undefined);
      return;
    }

    const web3 = new Web3(ethereum);

    web3.eth.net
      .getId()
      .then((networkId) => {
        const _address = contractJson.networks[networkId]?.address;

        if (_address) {
          setAddress(_address);
          setInstance(new web3.eth.Contract(contractJson.abi, _address));
        } else {
          setError("Contract address not found.");
          setAddress("");
          setInstance(undefined);
        }
      })
      .catch(() => {
        setError("Failed to get network ID.");
        setAddress("");
        setInstance(undefined);
      });
  }, [contractJson, chainId]);

  return useMemo(() => {
    return {
      contract: instance,
      address,
      error,
    };
  }, [instance, address, error]);
}
