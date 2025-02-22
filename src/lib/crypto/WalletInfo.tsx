"use client";
import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

const WalletInfo = () => {
  const { publicKey, connected, disconnect, connect } = useWallet();

  return (
    <div>
      <h1>Wallet Information</h1>
      {connected ? (
        <div>
          <p>Wallet is connected!</p>
          <p>Public Key: {publicKey?.toBase58()}</p>
          <button onClick={disconnect}>Disconnect Wallet</button>
        </div>
      ) : (
        "Wallet is not connected."
      )}
    </div>
  );
};

export default WalletInfo;