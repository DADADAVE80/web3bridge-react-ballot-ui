import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: import.meta.env.VITE_SEPOLIA_RPC_URL
}

const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

export const configureWeb3Modal = () => {
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [sepolia],
        projectId: import.meta.env.VITE_PROJECT_ID,
        enableAnalytics: false // Optional - defaults to your Cloud configuration
    })
}