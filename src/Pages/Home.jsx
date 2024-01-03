import React from 'react'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'

export function Home() {
  console.log('Main component rendered');
  return (
    <div>
      <div className='ml-[80px]'>
        <Main/>
      </div>
    </div>
  )
}
