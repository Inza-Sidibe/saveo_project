
import React, { ReactNode } from 'react'


interface CardProps {
  children: ReactNode;
}

const Button: React.FC<CardProps> = ({ children }) => {

  return (
    <button className='px-6 p-2 bg-[#d66d3c] mb-4 text-[#EBE8E0] font-semibold rounded-full hover:bg-[#da5213] drop-shadow-lg'>
        {children}
    </button>
  )
}

export default Button