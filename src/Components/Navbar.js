import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-full '>
          <div className='container px-20 pt-10 flex justify-between items-center'>
               <div className='brand w-1/4'>
                    <img src={logo} className='w-1/3 h-1/3'/>
               </div>

               <div className='navbar flex justify-between  w-2/4 px-20'>
                        <h3 className='text-sm font-roboto font-medium text-white opacity-85'>
                            All
                      </h3>
                      <h3 className='text-sm font-roboto font-medium text-white opacity-85'>
                            Mens
                      </h3>
                      <h3 className='text-sm font-roboto font-medium text-white opacity-85'>
                            Womens 
                      </h3>
                      <h3 className='text-sm font-roboto font-medium text-white opacity-85'>
                            Kids 
                      </h3>
               </div>

               <div className='w-1/4 flex justify-end'>
                      <button className='w-20 h-8 border bg-none text-slate-100 border-slate-100 text-sm font-roboto font-medium rounded-md'>Sign up</button>
               </div>
          </div>
    </div>
  )
}

export default Navbar