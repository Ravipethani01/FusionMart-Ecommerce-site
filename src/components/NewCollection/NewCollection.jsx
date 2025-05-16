import React from 'react'
import './NewCollection.css'
import new_collections from '../../assets/newcollections.js'
import Item from '../Items/Item.jsx'

const NewCollection = () => {
  return (
    <div className="newcollection flex flex-col items-center gap-2.5 mb-[100px]">
        <h1 className="text-[#171717] text-4xl font-semibold">NEW COLLECTIONs</h1>
        <hr className="w-48 h-1.5 rounded-[10px] bg-[#252525]" />
        <div className="collections grid grid-cols-6 mt-14 gap-7">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection
