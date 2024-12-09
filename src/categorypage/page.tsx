import React from 'react'
import { CategoryTop } from '@/app/components/topsell/categorytop'
import CasualCard from '@/app/components/topsell/casualcard'


const CategoryPage = () => {
  return (
    <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">
    <CategoryTop/>
    <div className='flex max-w-[90%] max-h-full justify-center items-center mb-48 mt-8 m-auto p-2'>
        <div className='w-[295px] h-[1120px] border-2 border-gray-200'></div>
        <div className='w-[925px] h-[1240px] border-b-2 border-gray-200 p-2'>
          <CasualCard/><br />


        </div>

    </div>
    </div>
  )
}
export default CategoryPage