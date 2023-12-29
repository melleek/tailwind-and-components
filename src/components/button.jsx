import React from 'react'

function Button({btn, mystyle}) {
  return (
    <div>
      <button className={`bg-[#0075FF] rounded-[14px] px-[38px] py-[26px] text-white text-center ${mystyle} `}>{btn}</button>
    </div>
  )
}

export default Button
