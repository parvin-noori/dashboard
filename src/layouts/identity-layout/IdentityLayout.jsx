import React from 'react'
import { Outlet } from 'react-router-dom'
import background from '/assets/imgs/background.png'

export default function IdentityLayout() {
  return (
    <div className='h-svh w-full grid lg:grid-cols-2'>
      <div className="grid place-content-center">
        <Outlet />
      </div>
      <img src={background} alt="background" className='h-full object-cover lg:block hidden'/>
    </div>
  )
}
