import React from 'react'
import DicLanding from '../_components/features/dic/DicLanding/DicLanding'

export default function page() {
  return (
    <div>
        <DicLanding/>
        <iframe src='https://forkify-api.herokuapp.com/phrases.html' className='min-h-screen  h-[500vh] w-fit scroll-auto flex  mx-auto' />
     
    </div>
  )
}
