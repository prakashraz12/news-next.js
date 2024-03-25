import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface ReporterAvatarCompoentProps {
    imageUrl?: String,
    firstName: String,
    middleName?: String,
    lastName: String
}
export const ReporterAvatarCompoent = ({imageUrl, firstName, middleName, lastName}:ReporterAvatarCompoentProps) => {
    return (
        <div className='flex items-center gap-3'>
            <Avatar className='border-dashed border-2 border-sky-500'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>{ }</AvatarFallback>
            </Avatar>
                <h6 className='text-lg font-bold'>टोपराज शर्मा</h6>
        </div>
    )
}
