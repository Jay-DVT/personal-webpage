import React from 'react'

/* needs to specify type of variable in TS */
const Button = ({ style , content }: {style: string; content: string}) => {
  return (
    /* button is by default gradient ${style} imports the given extra parameters */
    <button type='button' className={`py-2 bg-white ${style} rounded-[10px] bg-gradient-to-r from-[#38FF34] to-[#CAFC01] hover:text-[#CAFC01] hover:bg-none hover: hover:border-[#CAFC01] border-2 border-transparent`}>
        {content}
    </button>
  )
}

export default Button