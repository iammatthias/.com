import { useMoralis } from 'react-moralis';
import WalletConnectProvider from '@walletconnect/web3-provider';

export function GuestbookAuth() {
  const { authenticate, Moralis } = useMoralis();
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    rpc: {
      1: process.env.GATSBY_MORALIS_NODE,
      4: process.env.GATSBY_MORALIS_NODE_RINKEBY,
    },
  });

  return {
    login: async () => {
      await provider.enable();
      Moralis.Web3.getSigningData = () => 'My custom message';
      try {
        await authenticate({
          provider: provider,
          onSuccess: () => alert('🎉'),
        });
      } catch (e) {
        console.error(e.message, e);
      }
    },
  };
}