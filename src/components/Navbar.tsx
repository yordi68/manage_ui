import React from 'react'
import Logo from '../assets/logo.svg';


const Navbar = () => {
  return (
    <nav className='relative container mx-auto p-6 bg-red-500'> 
        <div className='flex flex-row items-center justify-between'>
            {/* logo */}
            <div className='pt-2'>
                <img src={Logo} alt="Logo" />

            </div>

        </div>
      
    </nav>
  )
}

export default Navbar