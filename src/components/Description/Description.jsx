import React from 'react'
import './Description.css'

const Description = () => {
  return (
    <div className="description my-[80px] mx-[50px]">
        <div className="navigator flex">
            <div className="nav-box flex items-center justify-center yexy-[16px] font-semibold w-[150px] h--[50px] border border-[#d0d0d0]">
                Description
            </div>
            <div className="fade bg-[#fbfbfb] text-[#555]">
                Review (135)
            </div>
        </div>
        <div className="descriptionbox-description flex flex-col gap-5 border border-[#d0d0d0] p-10 pb-[50px]">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quas consequatur tempore possimus quia vero aperiam nam voluptatum a quos. Omnis distinctio veniam ut porro id sed quas temporibus laudantium.
            Illum facere est sed cumque nostrum, eius minima officia error tempore ad id et ab delectus ipsam, porro amet nam quo! Porro magnam impedit optio dicta eius nisi aliquam ipsum.
            Saepe praesentium harum ex expedita minima qui quisquam libero, corporis esse quasi id at dignissimos debitis fugit quia omnis nesciunt eveniet totam ullam ut velit distinctio quam nemo odio. Dolore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic, placeat eum asperiores culpa ab officiis accusamus natus veritatis eaque, qui, debitis repudiandae consequuntur atque odit repellendus eligendi rem iste.</p>
        </div>
    </div>
  )
}

export default Description
