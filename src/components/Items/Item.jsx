import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item w-[200px] rounded-[20px] border border-black hover:transition-transform hover:scale-[1.1] hover:duration-0.6s">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className="h-[280px] w-[200px] rounded-t-[20px] rounded-tr-[20px] items-center justify-between" src={props.image} alt="" /></Link>
        <p className="my-1.5 mx-2.5 font-semibold">{props.name}</p>
        <div className="item-prices flex gap-5">
            <div className="item-price-new pl-2.5 text-[#374151] font-semibold text-[16px]">
                ${props.new_price}
            </div>
            <div className="item-price-old text-[#8c8c8c] font-medium text-[16px] line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
