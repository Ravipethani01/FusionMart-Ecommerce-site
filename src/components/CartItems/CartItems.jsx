import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import { assets } from '../../assets/assets'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className="cartitems my-[50] mx-[70px]">
            <div className="format-main grid items-center gap-[30px] py-2.5 px-0 text-[#454545] text-lg font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-[3px] bg-[#e2e2e2]" />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="formate grid items-center gap-[30px] py-2.5 px-0 text-[#454545] text-sm font-medium">
                            <img className={e.image} src="" alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="quantity h-8  w-[100px]">
                                {cartItems[e.id]}
                            </button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img className="h-3.5 cursor-pointer my-0 mx-7 w-3.5" src={assets.remove_icon} alt="" onClick={()=> removeFromCart(e.id)} />
                        </div>
                        <hr className="h-[3px] bg-[#e2e2e2]"/>
                    </div>
                }
                return null
            })}
            <div className="item-down flex my-[70px] mx-0">
                <div className="items-total flex flex-1 flex-col mr-[200px] gap-7">
                    <h1 className="text-2xl text-black font-bold">Cart Totals</h1>
                    <div className="">
                        <div className="total-item flex justify-between py-2.5 px-0">
                            <p className="">Subtotal</p>
                            <div className="">${getTotalCartAmount()}</div>
                        </div>
                        <hr className="h-[3px] bg-[#e2e2e2]"/>
                        <div className="total-item flex justify-between py-2.5 px-0">
                            <p className="">Shipping Fee</p>
                            <div className="">Free</div>
                        </div>
                        <hr className="h-[3px] bg-[#e2e2e2]"/>
                        <div className="total-item flex justify-between py-2.5 px-0">
                            <p className="">Total</p>
                            <div className="">${getTotalCartAmount()}</div>
                        </div>
                    </div>
                    <button className="w-[250px] rounded-3xl font-semibold cursor-pointer h-[50px] outline-none bg-[#b2b2c5] text-black text-[16px]">PROCEED TO CHECKOUT</button>
                </div>
                <div className="promocode flex-1 text-[16px] font-medium">
                    <p className="text-[#555]">If you have a promo code, Enter it here</p>
                    <div className="promo-box rounded-l-[5px] rounded-lb-[5px] rounded-r-[5px] rounded-rb-[5px] w-[350px] mt-5 pl-5 h-10 bg-[#eaeaea]">
                        <input className="bg-transparent text-[16px] w-[250px] outline-none h-10" type="text" placeholder="Promo code"/>
                        <button className="h-10 w-[80px] bg-[#0fef74] rounded-r-[5px] rounded-rb-[5px]">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CartItems
