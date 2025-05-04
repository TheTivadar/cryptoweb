"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createSubscription } from "@/lib/actions/emailActions";
import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { useFormStatus } from "react-dom";
import { SubscriptionBox } from "../Selecter/SubscriptionBox";
import { MovingButton } from "../ui/MovingBorders";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="rounded-[10px] mt-6" disabled={pending}>
      {pending ? "Küldés..." : "Feliratkozás"}
    </Button>
  );
}

export function SaveEmail() {
  const [state, action] = useActionState(createSubscription, {
    error: null,
    success: false,
  });
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [localState, setLocalState] = useState<{ error: string | null; success: boolean }>({ error: null, success: false });

  const options = [
    { value: "LV1", name: "0$ - 250$" },
    { value: "LV2", name: "250$ - 1000$" },
    { value: "LV3", name: "1000$ - 2500$" },
    { value: "LV4", name: "2500$ - 10000$" },
    { value: "LV5", name: "10000$ - 25000$" },
    { value: "LV6", name: "25000$ - 50000$" },
  ];


  useEffect(() => {
    setLocalState(state);
  }, [state]);


  useEffect(() => {
    if (!isOpen) {
      setLocalState({ error: null, success: false });
      setSelectedAmount("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (localState?.success) {
      const timer = setTimeout(() => {
        if (dialogCloseRef.current) {
          dialogCloseRef.current.click();
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [localState]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 ">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Feliratkozok!
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-transparent border-none px-4 md:px-0">
        <MovingButton
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex text-white border-slate-800 flex-col w-full pt-8"
        >
          <DialogHeader className="text-start w-full pl-6">
            <DialogTitle className="text-3xl">
              Hírlevél feliratkozás
            </DialogTitle>
            <DialogDescription>
              Értesülj e-mailben amikor újra elérhető lesz a regisztráció!
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4 w-full px-6 pt-12" action={action}>
            <div className="relative inline-flex h-12 w-full overflow-hidden rounded-[10px] p-[1px] mb-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <input
                type="email"
                name="email"
                placeholder="E-mail cím"
                className="inline-flex h-full w-full items-center justify-center rounded-[9px] bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl border-none focus:outline-none focus:ring-0"
              />
            </div>
            <SubscriptionBox
              data={options}
              value={selectedAmount}
              setValue={setSelectedAmount}
            />

            <input type="hidden" name="category" value={selectedAmount} />

            <div className="w-full text-start text-base font-medium">
            {localState?.success && (
                <p className="text-green-500">
                  Sikeresen feliratkozás, e-mailben értesítünk amikor elérhető
                  lesz a szolgáltatásunk!
                </p>
              )}
              {localState?.error && <p className="text-red-500">{localState.error}</p>}
            </div>

            {/* Fixed DialogClose with hidden button */}
            <DialogClose asChild>
              <button ref={dialogCloseRef} className="hidden" type="button" />
            </DialogClose>

            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        </MovingButton>
      </DialogContent>
    </Dialog>
  );
}
