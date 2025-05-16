import React from 'react'
import '../css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup w-full h-full py-[50px]">
      <div className="loginsignup-container rounded-2xl w-[500px] h-[500px] shadow bg-white m-auto py-10 px-14">
        <h1 className="my-5 mx-0 text-lg px-[158px]">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-7">
          <input className="h-[40px] rounded-lg w-full pl-5 border border-[#c9c9c9] outline-none text-[#464646] text-lg font-medium" type="text" placeholder="Your Name" />
          <input className="h-[40px] rounded-lg w-full pl-5 border border-[#c9c9c9] outline-none text-[#464646] text-lg font-medium" type="email" placeholder="Email Address" />
          <input className="h-[40px] rounded-lg w-full pl-5 border border-[#c9c9c9] outline-none text-[#464646] text-lg font-medium" type="password" placeholder="Password" />
        </div>
        <button className="mt-5 mx-auto flex items-center justify-self-center bg-[#8afbe6] cursor-pointer hover:transition-transform hover:scale-[1.1] hover:duration-300 hover:ease-in-out rounded-full px-10 py-2">Continue</button>
        <p className="login mt-5 text-[#5c5c5c] text-lg font-medium">
          Already have an account ? <span className="text-[#416dff] hover:underline hover:cursor-pointer font-semibold">Login here</span>
        </p>
        <div className="agree flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" className="flex top-1.5" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
