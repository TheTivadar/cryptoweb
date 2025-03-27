"use client"
import { useState } from "react";
import { toast } from "sonner";


const AddWalletClient = ({ currentUserId }: { currentUserId:string }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateWallet = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/dbcrud/addwallet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: currentUserId,
            address: "5PsQtPDdvfQtcq4xXDwwAjXJpt8DvPqa4G2QxuPLYwhJ",
          }),
        });
  
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.error || "Failed to create wallet.");
        }
  
        toast.success("Wallet created successfully!");
      } catch (error:any) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <button
        className="px-4 py-2 bg-violet-500 disabled:opacity-50"
        onClick={handleCreateWallet}
        disabled={isLoading}
      >
        {isLoading ? "Creating..." : "Create Wallet"}
      </button>
    );
}

export default AddWalletClient