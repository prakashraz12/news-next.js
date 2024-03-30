import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export const CommentInputCntainerCompoent = () => {
  return (
    <div className='mt-3 w-full'>
      <Textarea placeholder='Please write your comment' rows={5}/>
      <Button className='bg-sky-800 text-white hover:bg-sky-700 flex justify-end mt-3'>प्रतिक्रिया दिनुहोस्</Button>
    </div>
  )
}
