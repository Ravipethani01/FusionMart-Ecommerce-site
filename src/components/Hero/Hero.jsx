import React from 'react'
import "./Hero.css"
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className="hero h-screen flex">
      <div className="hero-left flex-1 flex flex-col justify-center gap-2 pl-20">
        <h2 className="text-[#090909] text-xl font-semibold">Best Deals !  Best Prices !</h2>
        <div className="hero-hand-icon flex items-center gap-5">
            <p className="text-[171717] text-6xl font-bold">new</p>
            <img className='h-14' src={assets.hand_icon} alt="" />
        </div>
        <p className="text-[171717] text-6xl font-bold">collection</p>
        <p className="text-[171717] text-6xl font-bold">for everyones</p>

        <div className="hero-latest-btn flex justify-center items-center gap-1 w-60 h-12 rounded-[75px] mt-7 bg-[#70f6f6] text-lg font-medium">
            <div>Latest Collections</div>
            <img className='h-5' src={assets.arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right flex flex-1 items-center justify-center">
        <img className='h-[600px]' src={assets.p2} alt="" />
      </div>
    </div>
  )
}

export default Hero
