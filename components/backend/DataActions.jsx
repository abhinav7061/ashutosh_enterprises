import React from 'react'
import DrawerBtn from './DrawerBtn'
import { Edit, Trash2 } from 'lucide-react'
import Button from './Button'

const DataActions = ({ title = '', itemForm }) => {
    return (
        <div className='flex gap-3 flex-col sm:flex-row'>
            <Button
                title='Bulk Action'
                icon={<Edit size={16} />}
                className='bg-gray-500 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 border'
            />
            <Button
                title='Delete'
                icon={<Trash2 size={16} />}
                className='bg-red-600 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-600'
            />
            <DrawerBtn
                buttonTitle={title}
                drawerContent={itemForm}
            />
        </div>
    )
}

export default DataActions