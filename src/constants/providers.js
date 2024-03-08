import {ethers} from "ethers";

// Read only
export const readOnlyProvider = new ethers.JsonRpcProvider(
    import.meta.env.VITE_SEPOLIA_RPC_URL
);

// Read-write
export const getProvider = (provider) => new ethers.BrowserProvider(provider);