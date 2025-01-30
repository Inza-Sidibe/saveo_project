import Card from '@/components/ui/Card'
import Stock from '@/components/ui/Stock'
import Button from '@/components/ui/Button'
import React from 'react'
import DateCalendarValue from '@/components/ui/Calendar'
import MenuCard from '@/components/ui/MenuCard'


function page() {
  return (
    <div className='flex flex-col max-h-screen my-8 justify-around'>
      <div className='flex flex-col px-6 '>
      <h2 className='text-3xl mb-2'>Stock</h2>
      <Card>
        <div className='flex pt-8 w-full gap-6 '>
          <div className='flex flex-col gap-2 justify-center'>
            <Stock />
            <Stock />
            <Stock />
          </div>
          <div className='flex flex-col gap-2 justify-center'>
            <Stock />
            <Stock />
            <Stock />
          </div>
        </div>
        <Button></Button>
      </Card>
      </div>
      <div className='flex flex-col px-6 '>
      <h2 className='text-3xl mb-2'>Menu</h2>
      <Card>
        <div className='flex py-4 w-full gap-6'>
          <div className='flex flex-col bg-[#EBE8E0] justify-center'>
            <DateCalendarValue></DateCalendarValue>
          </div>
          <div className='flex gap-2 justify-center'>
            <MenuCard />
          </div>
        </div>
      </Card>
      </div>
    </div>
  )
}

export default page