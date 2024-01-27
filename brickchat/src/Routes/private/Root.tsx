import React from 'react'
import Dashboard from '../../components/dashboard/Dashboard'
import DogImage from '../../components/dashboard/DogImage'
import BRToolbar from '../../components/dashboard/BRToolbar'


type Props = {}

export default function Root({}: Props) {
  return (
    <div>   
      <div className=''>
        <BRToolbar></BRToolbar>
      </div>
      <div className='flex m-10 gap-4'>
    <div className='w-full md:w-1/2'>
        <Dashboard />
    </div>
    <div className='w-full md:w-1/2'>
        <DogImage />
    </div>
</div>
</div>


  )
}