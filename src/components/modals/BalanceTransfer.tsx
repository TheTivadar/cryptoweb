"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { transferBetweenPots } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { CheckCircle2, Loader2, XCircle } from "lucide-react"
import { useActionState, useEffect, useRef, useState } from 'react'
import { FaWallet } from "react-icons/fa"
import { UserBalanceComboBox } from "../Selecter/UserBalanceComboBox"


interface BalanceTransferProps {
    userId: string;
    className?: string;
    userBalances: {
        id: string;
        type: string;
        amount: number;
        share: number;
    }[];
}

const BalanceTransfer = ({ userId, className, userBalances }: BalanceTransferProps) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [state, action] = useActionState(transferBetweenPots, null)
    const [error, setError] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const dialogCloseRef = useRef<HTMLButtonElement>(null);

    const BalanceTypeDefinitions = [
        { id: 'SAFE', name: 'Biztonságos', value: 'SAFE' },
        { id: 'NORMAL', name: 'Normál', value: 'NORMAL' },
        { id: 'RISKY', name: 'Agresszív', value: 'RISKY' },
    ];

    // Create combined balance types with amounts
    const BalanceTypes = BalanceTypeDefinitions.map(typeDef => {
        const userBalance = userBalances.find(b => b.type === typeDef.value);
        return {
            ...typeDef,
            amount: userBalance?.amount || 0,
            name: `${typeDef.name} ($${(userBalance?.amount || 0).toFixed(2)})`
        };
    });

    // Get current from balance amount
    const fromBalanceAmount = userBalances.find(b => b.type === from)?.amount || 0;
    const toOptions = BalanceTypes.filter(option => option.value !== from);

    useEffect(() => {
        if (!state) return;

        if (state.success) {
            setStatus("success");
            const timer = setTimeout(() => {
                dialogCloseRef.current?.click();
                setStatus("idle");
            }, 2000);
            return () => clearTimeout(timer);
        } else if (state.error) {
            setStatus("error");
            const timer = setTimeout(() => {
                setStatus("idle");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [state]);

    const handleSubmit = (formData: FormData) => {
        const fromBalance = userBalances.find(b => b.type === from);
        if (!fromBalance) {
            setError("Invalid source balance type");
            return;
        }

        if (amount <= 0) {
            setError("Amount must be positive");
            return;
        }

        if (fromBalance.amount < amount) {
            setError("Insufficient funds in source balance");
            return;
        }

        // Clear any previous errors
        setError("");
        return action(formData);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={cn("w-full py-3 bg-purple rounded-xl text-black font-semibold flex flex-row items-center justify-center gap-2 mt-4", className)}>
                    Egyenleg áthelyezése <FaWallet />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-4">
                <DialogHeader>
                    <DialogTitle>Egyenleg áthelyezése</DialogTitle>
                    <DialogDescription className='pt-1'>
                        Attól függetlenül, hogy itt sikeresen átrakta az egyenleget, amíg a jelenlegi kereskedés nem végződik, addig az előző számlán kereskedik a rendszer.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} onSubmit={() => setStatus("loading")} className="relative">
                    <div className='space-y-6'>
                        <input type="hidden" name="userId" value={userId} />
                        <div>
                            <Label>Honnan</Label>
                            <UserBalanceComboBox
                                data={BalanceTypes}
                                value={from}
                                setValue={setFrom}
                            />
                            <input type="hidden" name="fromType" value={from} />
                            {from && (
                                <p className="text-sm text-gray-500 mt-1">
                                    Available: ${fromBalanceAmount.toFixed(2)}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label>Hova</Label>
                            <UserBalanceComboBox
                                data={toOptions}
                                value={to}
                                setValue={setTo}
                            />
                            <input type="hidden" name="toType" value={to} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label>Összeg (USD)</Label>
                            <input
                                className="border border-zinc-300 p-2 rounded "
                                type='number'
                                name='amount'
                                placeholder={`Max: $${fromBalanceAmount.toFixed(2)}`}
                                value={amount || ""}
                                max={fromBalanceAmount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                disabled={!from}
                            />
                        </div>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className='flex flex-row justify-between items-center pt-6'>
                        <DialogClose ref={dialogCloseRef} asChild>
                            <Button variant="outline">Vissza</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting || !from || !to || amount <= 0} className="bg-purple text-black font-semibold flex flex-row items-center gap-2">
                            {isSubmitting ? "Feldolgozás..." : "Küldés"}
                        </Button>
                    </div>
                </form>
                {status === "loading" && (
                    <div className="flex flex-col items-center justify-center py-10 absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg">
                        <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
                        <p className="mt-4 text-lg">Feldolgozás alatt...</p>
                    </div>
                )}

                {status === "success" && (
                    <div className="flex flex-col items-center justify-center py-10 absolute inset-0 bg-white/20 backdrop-blur-md rounded-lg">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                        <p className="mt-4 text-3xl font-smeibold">Sikeres átutalás!</p>
                    </div>
                )}

                {status === "error" && (
                    <div className="flex flex-col items-center justify-center py-10 absolute inset-0 bg-white/20 backdrop-blur-md rounded-lg">
                        <XCircle className="h-16 w-16 text-red-500" />
                        <p className="mt-4 text-2xl font-semibold">Hiba történt az átutalás során</p>
                        <p className="text-sm text-muted-foreground">{state?.error}</p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default BalanceTransfer