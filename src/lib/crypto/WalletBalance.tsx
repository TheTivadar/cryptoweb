"use client";
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect, useState } from 'react';

const WalletBalance = () => {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (connected && publicKey) {
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

      // Fetch wallet balance
      const fetchBalance = async () => {
        const balance = await connection.getBalance(publicKey);
        setBalance(balance / LAMPORTS_PER_SOL); // Convert lamports to SOL
      };

      fetchBalance();
    } else {
      setBalance(null);
    }
  }, [connected, publicKey]);

  return (
    <div>
      <h1>Wallet Balance</h1>
      {connected ? (
        <p>Balance: {balance !== null ? `${balance} SOL` : 'Loading...'}</p>
      ) : (
        <p>Wallet is not connected.</p>
      )}
    </div>
  );
};

export default WalletBalance;