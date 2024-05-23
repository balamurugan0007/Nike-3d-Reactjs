import React from 'react'
import { shoe } from '../data/shoe'



export const Products = () => {

    


  return (
    <div className='w-full h-full px-10 overflow-hidden py-20'>

      <h2 className='text-5xl  font-bold text-yellow-500 uppercase font-roboto mt-10 text-center'>Our Products</h2>
     
      <div   className='flex mt-5'>
       {
            shoe && shoe.map(res=>(
                <div data-aos="fade-down"className='product-content w-96 h-96 m-5 bg-gray-100 p-3 rounded-lg shadow-lg' key={res.id}>
                        <div className='image mt-4'>
                             <img src={res.image} alt='picture' className='w-40 h-40 '/>
                        </div>
                        <div className='text-content mt-5'>
                            <h3 className='font-bold  font-poppins text-lg  text-slate-700 '>{res.name}</h3>
                            <p className='font-poppins text-sm text-slate-500 mt-3'>Ratings{res.rating}</p>

                            <div className='price flex justify-between px-5 mt-2'>
                              <del className='text-sm font-poppins text-slate-700 '>{res.old}</del>
                              
                                <p className='text-sm font-poppins text-red-500 '>{res.new}</p>

                            </div>

                            <div className='btn flex justify-between mt-4'>
                                 <button className='w-24 h-10 font-poppins text-xs text-slate-100 bg-yellow-500 rounded-md shadow-sm'>Cart</button>
                                 <button className='w-24 h-10 font-poppins text-xs text-slate-100 bg-red-500 rounded-md shadow-sm'>Buy</button>
                            </div>
                        </div>
                </div>        
                    ))
        }
       </div>
    

    </div>
  )
}
