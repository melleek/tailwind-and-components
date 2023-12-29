import React from 'react'

function Card2({img, h2, p, stl}) {
  return (
    <div>
      <div id="card2" className={`lg:w-[388px] flex flex-col items-center h-[494px] ${stl}`}>
        <img src={img} alt="" />
        <h2 className='text-[#211F54] font-[700] pt-[24px]'>{h2}</h2>
        <p className='text-center pt-[13px] w-[312px] text-[#6E7191] text-[21px]'>{p}</p>
      </div>
    </div>
  )
}

export default Card2
