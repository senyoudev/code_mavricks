import { useEffect, useMemo, useState } from "react";
import { AddressZero } from "@ethersproject/constants";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

export function useContract(contractJson) {
  const [address, setAddress] = useState(AddressZero);
  const [instance, setInstance] = useState();
  const [error, setError] = useState("");
  const { library, account, chainId } = useWeb3React();
  const signerOrProvider = account
    ? library.getSigner(account).connectUnchecked()
    : library;

  useEffect(() => {
    const { ethereum } = window;
    const web3 = new Web3(ethereum);

    web3.eth.net.getId().then((networkId) => {
      const _address = contractJson.networks[networkId]?.address;
      console.log("networkId", contractJson);
      if (_address) {
        setAddress(_address);
        setInstance(new web3.eth.Contract(contractJson.abi, _address));
      } else {
        setError("No Contract found.");
        setAddress("");
        setInstance(undefined);
      }
      if (networkId == "1337") {
        setAddress("0x86AFD8E4356C8ADb6Add2E161B31B5C674ef8964");
        setInstance(new web3.eth.Contract(contractJson.abi, _address));
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
