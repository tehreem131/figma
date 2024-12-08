import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm border-b mx-auto flex flex-col w-[144px]'>
            <div className='bg-black text-whitepy-2 text-sm flex justify-between items-center px-8 w-full'>
                <div className='text-center flex-1'>
                    Summer Scale for All swim Suits And Free Express belivery -off 50%!
                    <a href='#' className='underline hover-text-slote-300'>
                        {""}
                        ShopNow{""}
                    </a>
                </div>

                <div className='flex items-center gap-[2px]'>
                    <div className='text-white text-sm font-normal leading-[21px]'>
                        English
                    </div>
                    <RiArrowDropDownLine />
                </div>
            </div>

        </div>
    )
}

export default Navbar
