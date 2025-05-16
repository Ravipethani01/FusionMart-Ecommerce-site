import React, { useContext } from 'react'
import './ProductDisplay.css'
import { assets } from '../../assets/assets'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addTocart} = useContext(ShopContext)
  return (
    <div className="productdisplay felx my-0 mx-[50px]">
      <div className="left flex gap-4">
        <div className="img-list flex flex-col gap-2.5">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className="productdisplay-img">
          <img className="h-[500px]" src={product.image} alt="" />
        </div>
      </div>

      <div className="right my-0 mx-[50px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>
        <div className="starts flex items-center mt-2.5 gap-3.5 text-[#1c1c1c] text-[16px]">
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_dull_icon} alt="" />
          <p>(130)</p>
        </div>
        <div className="prices flex my-5 mx-0 gap-7 text-xl font-bold">
          <div className="old-price text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="new-price text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam sint velit minima nostrum rem quibusdam suscipit illum, repellat labore necessitatibus dolorum neque quam iure delectus. Illum, magni ipsa! Sapiente.
        </div>
        <div className="size felx my-5 mx-0 gap-5">
          <h1 className="mt-12 text-[#656565] text-[16px] font-semibold">Selct Size</h1>
          <div className="sizes py-[16px] px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button onClick={()=> {addTocart(product.id)}} className="py-[20px] px-10 w-[400px] text[16px] font-semibold text-white mb-5 bg-[#1af596] outline-none rounded-[3px] cursor-pointer">Add To Cart</button>
        <div className="category mt-2.5">
          <span className="font-semibold">Category:<span>Women, T-Shirt, Crop Top</span></span>
        </div>
        <div className="category">
          <span>Tags:<span>Modern, Latest, Trend Shorts</span></span>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay