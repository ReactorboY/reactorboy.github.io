import React from 'react'
import { BsFillCloudMoonFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='p-5 flex justify-between items-center'>
      <h1 className='text-4xl text-white'>Reactorboy</h1>
      <ul className='flex items-center'>
        <li>
          <BsFillCloudMoonFill />
        </li>
        <li className='ml-5 bg-gradient-to-r from-teal-500 to-blue-500 py-2 px-5 rounded-lg'>
          <a href='#'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
