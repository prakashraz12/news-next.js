import React from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Angry, Laugh, Meh, ThumbsDown, ThumbsUp } from 'lucide-react'

export const FeelingAfterReadNewsCompoent = () => {
  return (
    <Card className='p-6'>
        <CardTitle  className='md:text-4xl text-center text-2xl'>
            खबर पढेर तपाईलाई कस्तो महसुस भयो ?
        </CardTitle>
        <CardContent className='mt-5'>
          <div className='flex flex-wrap justify-between gap-5'>
            <div className='text-yellow-600 flex flex-col justify-center items-center hover:scale-105  cursor-pointer duration-100 ease-in transition-all'>
              <Laugh size={"25px"}/>
              <p className='text-xl font-semibold flex flex-col justify-center items-center hover:scale-105  cursor-pointer duration-100 ease-in transition-all'>खुसी</p>
            </div>
            <div className='flex flex-col justify-center items-center text-green-700 hover:scale-105  cursor-pointer duration-100 ease-in transition-all'>
              <ThumbsUp size={"25px"}/>
              <p className='text-xl font-semibold'>मन पर्‍यो</p>
            </div>
            <div className='flex flex-col justify-center items-center text-sky-800 hover:scale-105  cursor-pointer duration-100 ease-in transition-all'>
              <Meh size={"25px"}/>
              <p className='text-xl font-semibold'>ठिक छ</p>
            </div>
            <div className='flex flex-col justify-center items-center text-orange-500 hover:scale-105  cursor-pointer duration-100 ease-in transition-all'>
              <ThumbsDown size={"25px"}/>
              <p className='text-xl font-semibold'>मन परेन</p>
            </div>
            <div className='flex flex-col justify-center items-center text-red-500 hover:scale-105  cursor-pointer duration-100 ease-in transition-all'>
              <Angry size={"25px"}/>
              <p className='text-xl font-semibold'>रिस उठ्यो</p>
            </div>
          </div>
        </CardContent>
    </Card>
  )
}
