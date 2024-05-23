import React from 'react'
import shoeimg from '../assets/5-.png'
import shoeimg2 from '../assets/3-.png'

export const Quality = () => {
  return (
    <div className='w-full h-full py-10 '>

        <h3 className=' text-3xl font-poppins font-bold text-yellow-600  text-center uppercase'>Our Product Quality</h3>
   
      <div className='flex justify-center items-center px-20'>

        <div className='w-1/2'>

            <div data-aos="fade-left" className='text-content'>
                  <div className=' flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-rose-600 ml-5 flex justify-center items-center' >
                        <p className='font-poppins text-lg text-slate-100'>01</p>
                    </div>
                  <h3 className='text-2xl font-roboto font-bold  text-slate-100 lg:ml-5'>Enhanced Comfort</h3>
                  </div>
                  <p className=' mt-2 font-normal text-sm text-slate-300 font-poppins px-10 lg:ml-10'>Hillside shoes are designed with comfort in mind, featuring cushioned insoles and supportive arches that provide all-day comfort, making them ideal for long walks or standing for extended periods.</p>
            </div>

            <div data-aos="fade-down" className='text-content mt-10'>
            <div className=' flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-blue-600 ml-5 flex justify-center items-center' >
                        <p className='font-poppins text-lg text-slate-100 '>02</p>
                    </div>
                  <h3 className='text-2xl font-roboto font-bold  text-slate-100 lg:ml-5'>Stability and Support</h3>
                  </div>
                  <p className=' mt-2 font-normal text-sm text-slate-300 font-poppins px-10 lg:ml-10'>The construction of hillside shoes often includes sturdy materials and specialized designs that offer excellent stability and support, reducing the risk of slips, trips, or injuries, especially on uneven terrain.</p>
            </div>

        </div>
        <div data-aos="fade-right" className='w-1/2 flex justify-center'>

            <img src={shoeimg} alt='shoe' className='w-4/6 h-4/6'/>
            
            </div>
      </div>


      <div className='flex justify-center items-center px-20 mt-10'>

      <div className='w-1/2 flex justify-center'>

        <img data-aos="fade-left" src={shoeimg2} alt='shoe' className='w-4/6 h-4/6'/>

        </div>
  
        <div data-aos="fade-down" className='w-1/2'>

            <div className='text-content'>
                  <div className=' flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-orange-600 ml-5 flex justify-center items-center' >
                        <p className='font-poppins text-lg text-slate-100'>03</p>
                    </div>
                  <h3 className='text-2xl font-roboto font-bold  text-slate-100 lg:ml-5'> Durability</h3>
                  </div>
                  <p className=' mt-2 font-normal text-sm text-slate-300 font-poppins px-10 lg:ml-10'>Hillside shoes are typically made from high-quality materials that are built to withstand rugged outdoor conditions, ensuring longevity and durability even with frequent use..</p>
            </div>

            <div className='text-content mt-10'>
            <div data-aos="fade-left" className=' flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-purple-600 ml-5 flex justify-center items-center' >
                        <p className='font-poppins text-lg text-slate-100'>04</p>
                    </div>
                  <h3 className='text-2xl font-roboto font-bold  text-slate-100 lg:ml-5'>Versatility</h3>
                  </div>
                  <p className=' mt-2 lg:ml-10 font-normal text-sm text-slate-300 font-poppins px-10'>Many hillside shoes are versatile enough to be worn for various outdoor activities such as hiking, trekking, or casual walks, providing functionality across different terrains and environments.
</p>
            </div>

        </div>
      </div>
   
    </div>
  )
}
