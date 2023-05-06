import { useEffect, useMemo, useState } from "react";
import { AddressZero } from "@ethersproject/constants";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

interface ContractJson {
  networks: {
    [networkId: number]: {
      address: string;
    };
  };
  abi: any[];
}

interface ContractInstance {
  contract: Contract | undefined;
  address: string;
  error: string;
}

export function useContract(contractJson: ContractJson): ContractInstance {
  const [address, setAddress] = useState(AddressZero);
  const [instance, setInstance] = useState<Contract>();
  const [error, setError] = useState("");

  const { library, account, chainId } = useWeb3React();
  const signerOrProvider = account
    ? library.getSigner(account).connectUnchecked()
    : library;

  useEffect(() => {
    const { ethereum } = window;
    const web3 = new Web3(ethereum);

    web3.eth.net.getId().then((networkId: number) => {
      console.log("networkId", networkId);
      const _address = contractJson.networks[networkId]?.address;
      console.log("contractJson", contractJson);
      if (_address) {
        setAddress(_address);
        setInstance(new web3.eth.Contract(contractJson.abi, _address));
      } else {
        setError("No Contract found.");
        setAddress("");
        setInstance(undefined);
      }
    });
  }, [contractJson, chainId]);

  return useMemo(() => {
    return {
      contract: instance,
      address,
      error,
    };
  }, [address, contractJson, signerOrProvider, instance]);
}
