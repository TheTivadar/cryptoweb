
import { Separator } from '@/components/ui/separator'
import { getLatestNews } from '@/lib/news'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Tradingnews = async () => {

  const news = await getLatestNews({ type: 'ARTICLE' })
  return (
    <div className='p-[1vw]'>
      <h1 className='text-5xl font-semibold '>Hírek</h1>
      <Separator className='my-6 h-[2px] bg-white/30'/>
    <div className='max-w-[1100px] mx-auto space-y-6 px-2 lg:px-0'>
      {news.map((item) => (
        <div key={item.id} className='bg-black-100 border-purple border rounded-[30px] p-4'> 
          <Link href={item.link || "#"}  target="_blank" rel="noopener noreferrer">
          <div className='flex flex-row justify-between items-start'>
            <h1 className='text-xl sm:text-2xl font-semibold '>{item.title}</h1>
            <p className='pl-2'>{item.createdAt.toLocaleDateString()}</p>
          </div>
            <p className='text-sm pt-4 max-w-[90%]  text-white/90'>{item.description}...</p>
            <p className='pt-4 underline flex flex-row items-center gap-2 underline-offset-2'>Végig olvasom <FaArrowRight /></p>
          </Link>
        </div>
      ))}
    </div>
      </div>
  )
}

export default Tradingnews