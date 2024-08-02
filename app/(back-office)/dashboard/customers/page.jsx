import React from 'react'
import CustomDataTable from '@/components/backend/CustomDataTable'
import Heading from '@/components/backend/Heading'
import TableActions from '@/components/backend/TableActions'
import datas from '../../../../data.json'

const page = () => {
    return (
        <div className='md:space-y-8 sm:space-y-6 space-y-2'>
            {/* Header */}
            <Heading title="Customers" />
            <TableActions title="cusomers" />
            {/* Table */}
            <CustomDataTable thead={datas.thead} datas={datas.data} />
        </div>
    )
}

export default page