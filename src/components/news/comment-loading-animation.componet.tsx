import React from 'react'
import { Skeleton } from '../ui/skeleton'

export const CommentLoadingAniamtion = ({length}:{length:number}) => {
  return (
      <>
          {
              Array.from({ length: length }).map((i, index) => (
                <div className="flex gap-3 w-full p-2" key={index}>
                <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
                <div className="space-y-2 mt-1 w-full">
                  <Skeleton className="h-5 w-[250px] bg-gray-400" />
                  <Skeleton className="h-5 w-[200px] bg-gray-400" />
                  <div className="flex justify-end gap-3">
                    <Skeleton className="h-5 w-[50px] bg-gray-400" />
                    <Skeleton className="h-5 w-[30px] bg-gray-400" />
                    <Skeleton className="h-5 w-[30px] bg-gray-400" />
                  </div>
                </div>
              </div>
              ))
          }
      </>
  )
}
