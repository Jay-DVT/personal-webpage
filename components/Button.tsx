import React from 'react'

const Button = ({ style , content }: {style: string; content: string}) => {
  return (
    <button type='button' className={`py-2 px-[56px] bg-white ${style} rounded-[10px] bg-gradient-to-r from-[#38FF34] to-[#CAFC01] hover:text-[#CAFC01] hover:bg-none hover:bg-transparent hover:border-[#CAFC01] border-2 border-transparent`}>
        {content}
    </button>
  )
}

export default Button