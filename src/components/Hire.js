import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const Hire = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
    <div className='w-48 h-auto flex items-center justify-center relative'>
    <CircularText className={`animate-spin-slow`}/>
    <Link href="mmakira01@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md w-20 h-20 rounded-full capitalize hover:bg-slate-100 hover:text-dark hover:font-semibold'>hire me</Link>

    </div>
      
    </div>
  )
}

export default Hire
