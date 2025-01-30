import React from 'react'

function MenuCard() {
  return (
    <div className='flex gap-10 mx-6'>
        <div className='bg-[#EBE8E0] py-6 px-10'>
            <h2 className=' mx-auto bg-[#fff] px-8 py-4'>Entrée</h2>
            <div className=' my-8'>
                <div className='mt-6'>
                    <h3>Entrée 1</h3>
                    <div>
                        <h4>Salade piémontaise</h4>
                    </div>
                </div>
                <div>
                    <h3>Entrée 2</h3>
                    <div>
                        <h4>Salade piémontaise</h4>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default MenuCard
