import React from 'react'
import './Popular.css'
import Item from '../Items/Item'
import data_product from '../../assets/data'

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-2.5 h-[90vh]">
        <h1 className="text-[#171717] text-4xl font-semibold">POPULAR IN WOMEN</h1>
        <hr className="w-48 h-1.5 rounded-[10px] bg-[#252525]" />
        <div className="popular-item mt-14 flex gap-7">
            {data_product.map((item,i)=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular
