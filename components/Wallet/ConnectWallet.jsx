import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../../utils/Connector';

function ConnectWallet() {
  const {active, activate} = useWeb3React();
  
async function connect(){
    await activate(injected)
}
  return (
    <button onClick={connect} className="hidden md:block mt-0 py-0.5 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300">
        {active ? 'Connected' : 'Connect your wallet' }
    </button>
  )
}

export default ConnectWallet




