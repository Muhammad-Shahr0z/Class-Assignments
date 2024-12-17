import React from 'react'

function Button(props : any ) {
  return (
    <div>
          <button type='button' className='bg-#FFE492 2xl:w-[126px] 2xl:h-[60px] px-3 py-1 sm:px-5 sm:py-3 md:px-7 md:py-3 lg:px-9 lg:py-3 2xl:px-10 2xl:py-4 rounded-lg bg-[#FFE492] text-black ' > {props.btntext} </button>
    </div>
  )
}

export default Button;