import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center '>
        
            <h1 className='text-5xl my-5  text-white text-center '> Using of Suspense </h1>
            <div className=' flex gap-5  justify-center py-10'>
                <Link className='bg-amber-400 px-4 py-2 rounded-2xl text-black' href={'/tradational'}> tradational method  </Link>
                <Link className='bg-amber-400 px-4 py-2 rounded-2xl text-black' href={'/suspense'}> suspense method  </Link>
            </div>
    </div>
  )
}

export default page
