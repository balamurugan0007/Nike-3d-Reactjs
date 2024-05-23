import React, { useEffect, useState } from 'react'
import data from '../data/data'

import '../style.css'

const HeroSection = () => {

    const[shoe,setshoe]=useState(0)

    const [result,setresult]=useState()

     useEffect(()=>{

        const filterdata=()=>{
            const samples= data.filter(res=>res.id== shoe)
            console.log(shoe)
            console.log(samples)
            setresult(samples)
        }
    
        filterdata();

     },[shoe])

  return (
    <div className='w-full h-full px-20 '>
           <div className='flex justify-center items-center'>
               <div className='w-1/2 mt-10'> 

                   <div className='mt-10'>
                   {
                        result && result.map((res)=>(
                            <div key={res.id}>
                                  <h2 data-aos="fade-up"  data-aos-duration='1000' className='text-white relative shoetitle font-mochi font-bold text-3xl mt-10'>{res.name}</h2>
                                  <p className='text-xs font-poppins relative shoepara font-normal text-slate-300 mt-4 '>A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items.</p>
                            </div>
                        ))
                    }
                    
                   </div>

                   <div className='images flex mt-10'>
                         {data && data.map((pic)=>(
                              <div data-aos="fade-down" key={pic.id} className='pic rounded-lg shadow-lg border-2 hover:bg-yellow-600 m-5 hover:border-none' onClick={()=>setshoe(`${pic.id}`)}>
                                    <img src={pic.image} alt={pic.name} className='w-32 h-32 object-contain  '/>
                              </div>
                         ))}
                   </div>
               </div>
               <div className='w-1/2'> 
               
                        {
                             result && result.map((pic)=>(
                                  <div className=' flex justify-center overflow-hidden ' key={pic.id}>
                                

                                        <div className='w-1/4 h-full  absolute flyeranimate rotate-180 bg-gradient-to-b from-purple-700 to-blue-600 shoeback_image ' style={pic.id === 1 ? {width:'350px',height:'380px'}:null}>

                                

                                    </div>
                                       <img data-aos="fade-up" src={pic.image} style={pic.id === 1 ? {width:'350px',height:'350px'}:null} alt='pic' className='w-1/2 mt-6 h-1/2 object-cover relative animateshoe'/>
                                  </div>
                             ))
                        }
                  
               </div>
           </div>
    </div>
  )
}

export default HeroSection