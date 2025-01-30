import React from 'react'

interface StockProps {
  children?: React.ReactNode;
}

const Stock: React.FC<StockProps> = ({ children }) => {
  return (
    <div className='w-full'>
        <div className='flex gap-1 text-center !font-light text-[#030403]' >
            <div className='bg-[#EBE8E0] text-[#030403] px-4 py-2 '>
                <h3>Produit</h3>
            </div>
               
            
            <div className='bg-[#EBE8E0] text-[#030403] px-4 py-2  '>
                <h3>12/02/2025</h3>
            </div>
            <div className='bg-[#EBE8E0] text-[#030403] px-4 py-2'>
                <h3>Stock</h3>
            </div>
            <div className='bg-[#78956F] text-[#030403] px-4 py-2'>
                <h3>En Stock</h3>
            </div>
        </div>
        {children}
    </div>
  )
}

export default Stock