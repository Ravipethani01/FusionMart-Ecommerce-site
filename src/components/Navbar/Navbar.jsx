import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const navbar = () => {

    const [menu, setMenu] = useState("home")
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar flex justify-around p-4 shadow-[0_1px_3px_black]">
        <div className="nav-logo flex items-center gap-2.5">
            <img src={assets.logo} alt="" />
            <p className="text-[#171717] text-2xl font-semibold">FusionMart</p>
        </div>

        <ul className="flex items-center gap-10 text-[#000] text-lg font-medium">
            <li onClick={()=>{setMenu("home")}} className="flex flex-col items-center justify-center cursor-pointer"><Link to="/">Home</Link>{menu==="home" ? <hr className="border-none bg-red-400 rounded-lg w-4/5 h-[3px]" />:<></>}</li>
            <li onClick={()=>{setMenu("mens")}} className="flex flex-col items-center justify-center cursor-pointer"><Link to="/mens">Mens</Link>{menu==="mens" ? <hr className="border-none bg-red-400 rounded-lg w-4/5 h-[3px]" />:<></>}</li>
            <li onClick={()=>{setMenu("womenes")}} className="flex flex-col items-center justify-center cursor-pointer"><Link to="/womens">Womens</Link>{menu==="womenes" ? <hr className="border-none bg-red-400 rounded-lg w-4/5 h-[3px]" />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} className="flex flex-col items-center justify-center cursor-pointer"><Link to="/kids">Kids</Link>{menu==="kids" ? <hr className="border-none bg-red-400 rounded-lg w-4/5 h-[3px]" />:<></>}</li>
        </ul>

        <div className="nav-login-cart flex items-center gap-11">
            <Link to="/login"><button className="w-28 h-8 bg-white outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[16px] font-medium cursor-pointer">Login</button></Link>
            <Link to="/cart"><a className="text-2xl"><i class="fa fa-shopping-cart"></i></a></Link>
            <div className="nav-cart-count text-sm text-white w-5 h-5 flex items-center justify-center bg-red-600 rounded-full -ml-12 -mt-6">{getTotalCartItems()}</div>

        </div>
    </div>
  )
}

export default navbar
