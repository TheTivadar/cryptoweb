"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        {/*}
        try {
            const response = await fetch('/routing/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error);
                return;
            }
            localStorage.setItem('selectedCompany', '');
            router.push('/admin');
        } catch (error) {
            console.error("Login failed", error);
            setError("A login attempt failed, please try again later.");
        }*/}
        router.push("/dashboard")
    };
    return (
        <div className="relative h-full w-full">
            <Image
                alt=""
                src="/ai.jpg"
                width={1000}
                height={1000}
                className="absolute inset-0 z-0 h-full w-full blur-sm translate-y-[-1] object-center object-cover"
            />

            <div className="relative flex justify-center items-center min-h-screen z-10 ">
                <div className='grid grid-cols-12 w-full md:max-w-[90%] xl:max-w-[60%] px-4 md:px-0'>
                    <div className="col-span-12 md:col-span-6 bg-black-100 w-full rounded-xl md:rounded-none md:rounded-l-2xl py-20 pl-4">
                        <div className=" text-3xl font-[900] text-white py-6">
                            Üdvözlünk 👋!
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <form onSubmit={handleLogin}>
                            <div className="mb-4 pt-4">
                                <label className="block font-medium text-xl pb-2 text-white" htmlFor="username">
                                    Felhasználónév
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Felhasználónév"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-[90%] py-2 bg-gray-900 rounded placeholder-white/80 text-white/80 focus:ring-2 focus:ring-white/40 focus:outline-none pl-2"
                                    required
                                />
                            </div>
                            <div className="mb-6 pt-2">
                                <label className="block font-medium text-xl pb-2 text-white" htmlFor="password">
                                    Jelszó
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Jelszó"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-[90%] py-2 bg-gray-900 rounded placeholder-white/80 text-white/80 focus:ring-2 focus:ring-white/40 focus:outline-none pl-2"
                                    required
                                />
                            </div>

                            <div className='flex justify-start pt-10'>
                                <button
                                    type="submit"
                                    className="bg-white text-gray-900 py-2 px-4 rounded w-[90%]"
                                >
                                    Bejelentkezés
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden md:block md:col-span-6'>
                        <Image
                            src={"/aistock.webp"}
                            alt='iamge'
                            height={1000}
                            width={1000}
                            className='object-cover object-center h-full w-full rounded-r-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm