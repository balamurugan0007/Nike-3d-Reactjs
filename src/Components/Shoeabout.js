import React from 'react'

import displayimg from '../assets/display.png'

const Shoeabout = () => {
    const shoe_detail =[
        {
        "id": 1,
        "type": "Running Shoes",
        "summary": "Designed for running with cushioning and support to reduce impact on joints."
        },
        {
        "id": 2,
        "type": "Basketball Shoes",
        "summary": "Engineered for basketball players with ankle support and traction for quick movements."
        },
        {
        "id": 3,
        "type": "Sneakers",
        "summary": "Casual shoes with versatile styling suitable for everyday wear."
        },
        {
        "id": 4,
        "type": "Sandals",
        "summary": "Open-toed footwear ideal for warm weather, providing comfort and breathability."
        },
        {
        "id": 5,
        "type": "Boots",
        "summary": "Sturdy footwear designed for rugged terrain, offering ankle support and durability."
        }
        ]


  return (
    <div>
         <div className='w-full h-full bg-green-600 '>

<div className='flex justify-center '>
{
     shoe_detail && shoe_detail.map((data)=>(
         <div className='p-2 w-60 m-4 flex flex-col justify-center'>
              <h3 className='text-xl  text-center font-medium text-slate-100  font-poppins'>{data.type}</h3>
              <p className='text-sm font-normal text-center text-slate-300 font-poppins mt-3'>{data.summary}</p>
         </div>
     ))
 }
</div>



  
</div>

<section className=' px-20 w-full h-full '>

<div className='flex justify-center items-center'>

<div className='w-1/2'>
  <img data-aos="fade-left" src={displayimg} style={{width:'100%',height:'500px'}} alt='pic'/>
</div>

<div className='px-10 py-5 ' data-aos="fade-right">
    <h3 className='text-5xl font-poppins font-semibold text-yellow-500 '>
         We Provide <span className='text-slate-100'>High Quality</span> Shoes
    </h3>

    <p className=' font-normal font-roboto text-sm mt-4 text-slate-300 mt-4'>Nike shoes are known for superior quality, thanks to advanced technology and materials. Rigorous quality control ensures durability and comfort, minimizing defects. Continuous innovation maintains Nike's reputation for high-performance footwear.</p>

    <button className=' w-80 h-10 mt-4 rounded-xl bg-yellow-500 text-slate-100 font-poppins text-sm font-normal'>Checkout New Stocks</button>
</div>

</div>

</section>

    </div>
  )
}

export default Shoeabout