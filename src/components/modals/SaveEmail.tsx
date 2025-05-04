"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useState } from "react";
import { PotTypeComboBox } from "../Selecter/BalanceTypeCheckBox";

export function SaveEmail() {
  const [state, action] = useActionState("transferBetweenPots", null);
  const [emailAddress, setEmailAddress] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");

  const options = [
    { value: "LV1", name: "< 250$" },
    { value: "LV2", name: "< 1000$" },
    { value: "LV3", name: "< 2500$" },
    { value: "LV4", name: "< 10000$" },
    { value: "LV5", name: "< 25000$" },
    { value: "LV6", name: "< 50000$" },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-4 ">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <PotTypeComboBox
            data={options}
            value={selectedAmount}
            setValue={setSelectedAmount}
          />
          <input type="hidden" name="type" value={selectedAmount} />
          <input
            type="email"
            name="email"
            placeholder="E-mail cím"
            className="border border-zinc-300 p-2"
          />
        </form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
