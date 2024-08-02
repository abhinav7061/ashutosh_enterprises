import React from 'react'
import { Settings2, LayoutDashboard, LogOut, User } from 'lucide-react'
import Dropdown from './Dropdown'

const UserIcon = () => {
    return (
        <Dropdown button={<User fill='green' className='hover:text-green-500 cursor-pointer' />} dilogProperty={`absolute right-0 top-10`} className='relative' >
            <div className="bg-white shadow-md dark:bg-gray-700 rounded-lg p-4 text-gray-500 text-sm mb-1.5 dark:text-gray-400 font-bold animate-opacityInc">
                <div className="flex items-center px-4 py-2 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100">
                    <LayoutDashboard className='w-4 mr-2' /> Dashboard
                </div>
                <div className="flex items-center px-4 py-2 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100">
                    <Settings2 className='w-4 mr-2' /> Edit Profile
                </div>
                <div className="flex items-center px-4 py-2 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100">
                    <LogOut className='w-4 mr-2' /> Logout
                </div>
            </div>
        </Dropdown>
    )
}

export default UserIcon