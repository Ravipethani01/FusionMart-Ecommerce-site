import React from 'react'
import './RelatedProducts.css'
import Item from '../Items/Item'
import data_product from '../../assets/data'

const RelatedProducts = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-2.5 h-[90vh]">
        <h1 className="text-[#171717] text-4xl font-semibold">Related Products</h1>
        <hr className="w-[200px] h-1.5 rounded-lg bg-[#252525]"/>
        <div className="items mt-[50px] flex gap-7">
            {data_product.map((item, i)=> {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
