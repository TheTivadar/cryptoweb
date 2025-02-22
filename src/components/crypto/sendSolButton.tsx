
"use client";
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react';

const SendSolButton = () => {
  const { publicKey, signTransaction } = useWallet();

  // Fixed recipient account (replace with your desired public key)
  const fixedRecipient = new PublicKey('5PsQtPDdvfQtcq4xXDwwAjXJpt8DvPqa4G2QxuPLYwhJ');

  const sendSol = async () => {
    if (!publicKey) {
      alert('Wallet not connected!');
      return;
    }

    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    const amount = 1; // Amount of SOL to send

    try {
      // Create a transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: fixedRecipient,
          lamports: amount * LAMPORTS_PER_SOL, // Convert SOL to lamports
        })
      );

      // Set the recent blockhash and fee payer
      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // Sign the transaction
      /* const signedTransaction = await signTransaction(transaction);

      // Send the signed transaction
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      await connection.confirmTransaction(signature);

      alert(`Transaction successful! Signature: ${signature}`); */
    } catch (err) {
      console.error('Failed to send SOL:', err);
      alert('Failed to send SOL.');
    }
  };

  return (
    <div>
      <button onClick={sendSol}>Send 1 SOL to Fixed Account</button>
    </div>
  );
};

export default SendSolButton;