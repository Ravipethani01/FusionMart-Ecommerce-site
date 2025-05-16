import React from 'react'
import './Bredcrums.css'
import {assets} from '../../assets/assets'


const Bredcrums = (props) => {

  const {product} = props;

  return (
    <div className="bredcrums flex items-center gap-2 text-[#5e5e5e] text-[16px] font-semibold my-[60px] mx-[170px] capitalize">
        Home <img src={assets.arrow_icon} height="10px" alt="" />
        Shop <img src={assets.arrow_icon} height="10px" alt="" />
        {product.category}<img src={assets.arrow_icon} height="10px" alt="" />
        {product.name}
    </div>
  )
}

export default Bredcrums
