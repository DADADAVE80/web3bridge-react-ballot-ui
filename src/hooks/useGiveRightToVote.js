import { useCallback } from "react"
import {isAddress} from "ethers"
import { isSupportedChain } from "../utils"
import { getProvider } from "../constants/providers"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"

const useGiveRightToVote = (address) => {
    const {walletProvider} = useWeb3ModalAccount;

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if(!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = getProvider(walletProvider);
        
    })
}
