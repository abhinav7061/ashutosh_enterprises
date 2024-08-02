import React from 'react'
import datas from '../../../../data.json'
import CustomDataTable from '@/components/backend/CustomDataTable'
import TableActions from '@/components/backend/TableActions'
import { Edit, Trash2 } from 'lucide-react'
import Heading from '@/components/backend/Heading'
import DataActions from '@/components/backend/DataActions'
import StaffForm from '@/components/backend/catalogForms/StaffForm'
import SelectInput from '@/components/backend/customInputs/SelectInput'
import StaffFilter from '@/components/backend/StaffFilter'

const page = () => {
    return (
        <div className='md:space-y-8 sm:space-y-6 space-y-2'>
            <Heading title='All Staff' />
            <TableActions
                tableFilter={<StaffFilter />}
            >
                <DataActions title='Staff' itemForm={<StaffForm />} />
            </TableActions>
            <CustomDataTable thead={datas.thead} datas={datas.data} actions={<Actions />} />
        </div>
    )
}

export default page

const Actions = () => {
    return (
        <div className='flex gap-4'>
            <button className='hover:text-green-600'><Edit width={20} /></button>
            <button className='hover:text-red-600'><Trash2 width={20} /></button>
        </div>
    )
}