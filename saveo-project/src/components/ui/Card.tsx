import React, { ReactNode } from 'react'


interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className=' flex flex-col justify-center items-center gap-4 px-6  bg-[#F1F4F0] rounded-sm drop-shadow-xl'>
      {children}
    </div>
  )
}

export default Card