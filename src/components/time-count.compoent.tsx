import { Clock } from 'lucide-react'
import React from 'react'

export const TimeCountComponent = () => {
  return (
      <div className='flex gap-2 items-center'>
          <Clock />
          <p className='font-bold text-lg'> ३ घन्टा अगाडि</p>
    </div>
  )
}
