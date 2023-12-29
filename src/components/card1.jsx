import React from 'react'

function Card1({img1, h2, p}) {
  return (
    <div>
        <div className='w-[374px] h-[392px] flex flex-col items-center gap-[15px]'>
            <img src={img1} alt="" />
            <h2 className='font-[700] text-[28px]'>{h2}</h2>
            <p className='text-center text-[#6E7191]'>{p}</p>
        </div>
    </div>
  )
}

export default Card1
