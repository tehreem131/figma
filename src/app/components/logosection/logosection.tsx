import React from 'react'
import Image from 'next/image'

export const LogoSection = () => {
  return (
    <div className='w-[1440px] h-[122px] bg-black flex justify-evenly items-center m-auto '>
        <Image
        src={'/versace.png'}
        width={100}
        height={100}
        alt='versace logo'
        className='w-[166.5px] h-[33px]'
        />
        <Image
        src={'/zara.png'}
        width={100}
        height={100}
        alt='zara logo'
        className='w-[91px] h-[38px]'
        />
        <Image
        src={'/gucci.png'}
        width={100}
        height={100}
        alt='gucci logo'
        className='w-[156px] h-[36px]'
        />
        <Image
        src={'/prada-logo-1 1.png'}
        width={100}
        height={100}
        alt='prada logo'
        className='w-[194px] h-[32px]'
        />
        <Image
        src={'/ck.png'}
        width={100}
        height={100}
        alt='ck logo'
        className='w-[207px] h-[33px]'
        />
        
    </div>
  )
}