import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const UserSettings = () => {
    return (
        <div>
            <div className='flex flex-col gap-2'>
                <p>User Infromation</p>
                <Input placeholder='Full Name' />
                <Input placeholder='Email' />
                <Input placeholder='Phone' />
                <Button variant="secondary">
                    Update Profile
                </Button>
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <p>Change Password</p>
                <Input placeholder='Old password' />
                <Input placeholder='New password' />
                <Input placeholder='Confirm new password' />
                <Button variant="outline">
                    Update Password
                </Button>
            </div>
        </div>
    )
}
