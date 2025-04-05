"use client";
import { useState } from "react";
import { toast } from "sonner";
import useUserStore from "../providers/userStore";
import { FaWallet } from "react-icons/fa";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const AddWalletClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { normalUser } = useUserStore();
  const { publicKey, connected } = useWallet();

  const handleCreateWallet = async () => {
    setIsLoading(true);
    try {
      if (!publicKey || !normalUser) {
        throw new Error("Wallet not connected");
      }

      const res = await fetch("/api/dbcrud/addwallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: normalUser.id,
          address: publicKey.toString(),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to create wallet.");
      }

      toast.success("Wallet created successfully!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!normalUser) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-col gap-2">
      {!connected ?
      <WalletMultiButton 
        className="wallet-adapter-button-custom" 
        style={{
          width: '100%',
          padding: '0.75rem 0',
          backgroundColor: '#cbacf9',
          color: 'black',
          fontWeight: 600,
          borderRadius: '0.75rem',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1rem'
        }}
      >Tárca hozzákapcsolása</WalletMultiButton>
       :
        <button
          className="w-full py-3 bg-purple rounded-xl text-black font-semibold flex flex-row items-center justify-center gap-2 mt-4"
          onClick={handleCreateWallet}
          disabled={isLoading}
        >
          {isLoading ? "Mentés..." : "Tárca mentése"}
          <FaWallet />
        </button>
      }
    </div>
  );
};

export default AddWalletClient;