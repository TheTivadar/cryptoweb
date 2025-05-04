import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LanguageSelectorNav } from './LanguageSelector';
import { SlideTabs } from './slidetabs';
import { FaArrowRight } from 'react-icons/fa';
import MobileNavbar from '../mobile/mobile';

const Navbar = () => {
    const t = useTranslations('navbar');

    return (
        <div className='relative max-w-fit md:min-w-[70vw] z-50 lg:max-w-full lg:mx-auto flex flex-row items-start lg:items-center justify-start lg:justify-between px-2 xl:px-10  lg:pt-4 '>
            <div className='flex flex-row justify-start items-center gap-2 xl:gap-4 '>
                <Link href={"/"} className='flex flex-row items-center '>
                    <Image
                        src={"/alegexlogofull.png"}
                        width={1000}
                        height={500}
                        className='w-[200px] h-[100px] object-contain hidden xl:block'
                        alt='logo'
                    />
                    <Image
                        src={"/Alogo.png"}
                        width={1000}
                        height={500}
                        className='w-[50px] h-[100px] object-contain xl:hidden'
                        alt='logo'
                    />
                </Link>
                <SlideTabs />
            </div>

            <div className='flex-row items-center pl-8 gap-2  hidden lg:flex'>
                <LanguageSelectorNav />
                <Link href={"/login"} className='text-base border-2 group px-4 flex flex-row items-center gap-2  rounded-[10px] bg-white text-black hover:bg-purple duration-300 hover:text-black font-medium'>
                    {t('login')}
                    <FaArrowRight className='bg-purple group-hover:bg-white my-3 text-3xl text-black rounded-[10px] p-[6px] duration-300'/>
                </Link>
            </div>
            <div className='flex-row items-center pl-8 gap-2 lg:hidden '>
               <MobileNavbar />
            </div>
        </div>
    )
}

export default Navbar