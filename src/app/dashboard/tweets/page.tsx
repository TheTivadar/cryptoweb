
import { Separator } from '@/components/ui/separator'
import { getLatestNews } from '@/lib/news'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Tweets = async () => {

  const news = await getLatestNews({ type: 'TWEET' })
  return (
    <div className='p-[1vw]'>
      <h1 className='text-5xl font-semibold '>TWEETEK</h1>
      <Separator className='my-6 h-[2px] bg-white/30'/>
    <div className='max-w-[1100px] mx-auto'>
      {news.map((item) => (
        <div key={item.id} className='bg-stone-800 rounded-[30px] p-4'> 
          <Link href={item.link || "#"} target="_blank" rel="noopener noreferrer">
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-2xl font-semibold'>{item.title}</h1>
            <p>{item.createdAt.toLocaleDateString()}</p>
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

export default Tweets