import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="footer flex justify-center flex-col items-center gap-12">
            <div className="footer-logo flex items-center gap-5">
                <img className="h-12" src={assets.logo} alt="" />
                <p className="text-2xl text-[#383838] font-bold">FusionMart</p>
            </div>
            <ul className="footer-links flex gap-12 text-[#383838] text-xl">
                <li className="cursor-pointer hover:text-black">About</li>
                <li className="cursor-pointer hover:text-black">Products</li>
                <li className="cursor-pointer hover:text-black">Office</li>
                <li className="cursor-pointer hover:text-black">Company</li>
                <li className="cursor-pointer hover:text-black">Contact</li>
            </ul>
            <div className="footer-social-icons flex gap-3">
                <a className="footer-icon-container text-2xl cursor-pointer hover:text-pink-600 p-2.5 pb-1.5">
                    <i class="fa fa-instagram"></i>
                </a>
                
                <a className="footer-icon-container text-2xl cursor-pointer hover:text-blue-600 p-2.5 pb-1.5">
                    <i class="fa fa-facebook-square"></i>
                </a>

                <a className="footer-icon-container text-2xl cursor-pointer hover:text-green-600 p-2.5 pb-1.5">
                    <i class="fa fa-whatsapp"></i>
                </a>
            </div>
            <div className="foter-copyrightes flex flex-col items-center gap-7 w-full mb-7 text-[#1a1a1a] text-xl">
                <hr className="w-4/5 border-none rounded-[10px] h-0.5 bg-[#c7c7c7]"/>
                <p className="">copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
