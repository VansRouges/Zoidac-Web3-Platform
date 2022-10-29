import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='bg-[#000324] text-white flex justify-between h-12 px-7 p-2'>
          <div className='flex w-36 cursor-pointer'>
            <NavLink className='px-2 text-2xl font-extrabold tracking-wide' >ZOI<span className='text-[#CB22A6]'>DAC</span></NavLink>
          </div>
        <div className='flex w-3/6  justify-evenly font-medium'>
            <Link to='/' reloadDocument><h3 className='w-20 h-8 flex justify-center items-center'>Home</h3></Link>
            <Link to='/a'><h3 className='w-20 h-8 flex justify-center items-center'>About</h3></Link>
            <Link to='/b'><h3 className='w-20 h-8 flex justify-center items-center'>Community</h3></Link>
            <Link to='/c'><h3 className='w-20 h-8 flex justify-center items-center'>Discover</h3></Link>
            <Link to='/d'><div className='w-20 h-8 flex justify-center items-center border-[#B51F98] border-4'><h3>Log In</h3></div></Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
