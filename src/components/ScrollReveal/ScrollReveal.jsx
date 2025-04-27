'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const ScrollRevealComp = () => {
  const t = useTranslations('maintechnology')
  return (
    <div className='bg-black-100  relative py-20 hidden lg:block'>
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          width={1000}
          height={1000}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="absolute overflow-visible inset-0  left-[0] top-[50vh] h-[1000px] w-[1000px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div>
      <div className='max-w-7xl mx-auto flex flex-row order z-10 relative'>
        <div className='flex-1 relative '>
          <Image
            src={"/robotoldalt.png"}
            alt='robot'
            width={1000}
            height={1000}
            priority
            className='h-full w-full object-center object-contain blur-bottom '
          />
        </div>
        <div className='flex-1'>
          <h1 className='text-3xl text-white font-semibold'>{t('title')}</h1>
          <p className='text-white/80'>            <br />{t('description1')} <br /> <br />{t('description2')}
          </p>
        </div>
      </div>
    </div>
  )
}
export default ScrollRevealComp

