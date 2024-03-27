import { Clock } from 'lucide-react'
import React from 'react'

export const TimeCountComponent = () => {
  return (
      <div className='flex gap-2 items-center'>
          <Clock fontSize={"10px"} />
          <p className='font-bold md:text-xl text-sm'> ३ घन्टा अगाडि</p>
    </div>
  )
}
