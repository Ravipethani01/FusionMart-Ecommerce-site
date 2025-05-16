import React from 'react'
import './Offers.css'
import { assets } from '../../assets/assets'

const Offers = () => {
    return (
        <div className="offers w-[65%] h-[60vh] flex m-auto mt-[100px] py-0 px-6 mb-[150px] bg">
            <div className="offers-left flex-1 flex flex-col justify-center leading-tight">
                <h1 className="text-[#171717] text-[40px] font-semibold tracking-wide">Exclusive</h1>
                <h1 className="text-[#171717] text-[40px] font-semibold tracking-wide">Offers For You</h1>
                <p className="text-[#171717] text-sm font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="w-[200px] h-[40px] rounded-4xl bg-[#32f8ca] text-[16px] font-medium mt-7 cursor-pointer">Check Now</button>
            </div>

            <div className="offers-right flex-1 flex items-center justify-center -mt-7">
                <img className="h-[398px]" src={assets.exclusive_transparent} alt="" />
            </div>
        </div>
    )
}

export default Offers
