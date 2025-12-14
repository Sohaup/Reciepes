import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function Loader() {
  return (
    <div className='fixed inset-0 bg-black/70 w-screen flex justify-center items-center'>
        <Spinner color='white' className='size-15'/>
    </div> 
  )
}
