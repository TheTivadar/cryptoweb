import { FaCoins, FaGem, FaCrown, FaStar, FaRocket} from 'react-icons/fa';
import { IoDiamond } from "react-icons/io5";

const AccountSizeIcon = ({ balance }: { balance: number }) => {

    if (balance < 250) return  <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-gray-400 rounded-md "><FaCoins className="text-black p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>1</span></p></div>;
    if (balance >= 250 && balance < 1000) return <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-violet-300 rounded-md"><FaCoins className="text-black p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>2</span></p></div>;
    if (balance >= 1000 && balance < 2500) return <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-violet-700 rounded-md"><FaGem className="text-white p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>3</span></p></div>;
    if (balance >= 2500 && balance < 10000) return <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-stone-800 rounded-md"><FaStar className="text-yellow-400 p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>4</span></p></div>;
    if (balance >= 10000 && balance < 25000) return <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-stone-800 rounded-md"><FaCrown className="text-yellow-400 p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>5</span></p></div>;
    if (balance >= 25000 && balance < 50000) return <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-stone-800 rounded-md"><FaRocket className="text-blue-500 p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>6</span></p></div>;
    if (balance >= 50000) return <div className='flex flex-col items-center justify-center'><div className="text-2xl p-2 bg-teal-400 rounded-md"><IoDiamond  className="text-black p-[0.5]" /></div><p className='text-lg '>Level: <span className='font-bold text-xl'>7</span></p></div>;
    return <div className="text-2xl p-2 bg-gray-400 rounded-md"><FaCoins className="text-black p-[0.5]" /><p className='text-lg '>Level: <span className='font-bold text-xl'>0</span></p></div>;

};

export default AccountSizeIcon;