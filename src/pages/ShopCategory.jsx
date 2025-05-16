import React, { useContext, useState } from 'react'
import '../css/ShopCategory.css'
import {ShopContext} from '../context/ShopContext'
import Item from '../components/Items/Item'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className="shop-category">
      <img className="block my-7 w-[82%] mx-auto" src={props.banner} alt="" />
      <div className="shopcategory-indexSort flex my-0  mx-[170px] justify-between items-center">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-2.5 px-5 rounded-[40px] border border[#888]">
          Sort by <i class="fa fa-angle-down"></i>
        </div>
      </div>
      <div className="shopcategory-products my-5 mx-[170px] grid grid-cols-4 gap-y-5">
        {all_product.map((item,i)=> {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore w-[200px] h-[60px] rounded-[75px] bg-[#ededed] text-[#212020] text-lg font-medium flex justify-center items-center my-[70px] mx-auto">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
