import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-center items-center bg-gray-950 border-b-2 border-amber-600 w-screen b row-start-1 row-end-3 shadow-2xl' >
        <Link to="/"><h1 className='px-8 py-6 text-3xl text-amber-600 font-bold text-center hover:text-amber-500'>LoL Stat Checker</h1></Link>
    </div>
  )
}
