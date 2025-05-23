"use client";

import { useEffect } from "react";
import useUserStore from "./userStore";


interface UserInitializerProps {
    normalUser: any; 
}

export default function UserInitializer({ normalUser }: UserInitializerProps) {
    const setNormalUser = useUserStore((state) => state.setNormalUser);


    useEffect(() => {
        if (normalUser) {
            setNormalUser(normalUser);
        }
    }, [normalUser, setNormalUser]);

    return null; 
}