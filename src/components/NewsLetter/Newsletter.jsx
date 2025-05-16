import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter w-[100%] h-[50vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] gap-7">
        <h1 className="text-[#454545] text-[55px] font-semibold">Get Exclusive Offers on Your Email</h1>
        <p className="text-[#454545] text-xl">Subscribe to our newsletter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-[700px] h-11 rounded-[80px] border border-[#e3e3e3]">
            <input className="w-[500px] ml-7 border-none text-[16px] text-[#616161] outline-none" type="email" placeholder='Your Email id'/>
            <button className="w-[138px] h-11 rounded-[80px] bg-black text-[16px] cursor-pointer text-white">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
