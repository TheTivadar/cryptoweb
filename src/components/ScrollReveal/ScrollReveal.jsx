'use client';
import Image from 'next/image';


const ScrollRevealComp = () => {
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
          <h1 className='text-3xl text-white font-semibold'>Technológia</h1>
          <p className='text-white/80'>            <br />Az AI alapú kereskedés technológiai rendszereink egy új szintre emelik a pénzügyi tranzakciókat. Az algoritmusok képesek nagy mennyiségű adatot elemezni valós időben, figyelembe véve a globális piaci trendeket. Az AI folyamatosan tanul és alkalmazkodik a piaci környezet változásaihoz, azáltal, hogy mélytanulás és természetes nyelvfeldolgozás segítségével felismeri a mintákat, amelyek az emberi kereskedők számára könnyen elkerülhetők.
            <br />            <br />
            A rendszer képes a piaci volatilitás előrejelzésére, automatikusan beállítva a kockázati szinteket és optimalizálva a kereskedéseket, hogy maximalizálja a nyereséget és minimalizálja a veszteségeket. Az AI algoritmusok nemcsak a múltbeli adatokra, hanem a jövőbeli trendekre is figyelnek, így gyors döntéseket hoznak még a piaci hullámzások közepette is. Mindezeket a folyamatokat rendkívül gyorsan és hatékonyan végzi el, 24/7 folyamatosan, emberi beavatkozás nélkül.
          </p>
        </div>
      </div>
    </div>
  )
}
export default ScrollRevealComp

