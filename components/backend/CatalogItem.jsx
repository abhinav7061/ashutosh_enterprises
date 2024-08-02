import React from 'react'
import CustomDataTable from './CustomDataTable'
import Heading from './Heading'
import TableActions from './TableActions'

const CatalogItem = ({ datas = [{ thead: {} }, { data: {} }], dataAnctions, tableFilter, title = '', heading = '' }) => {
    return (
        <div className='md:space-y-8 sm:space-y-6 space-y-2'>
            {/* Header */}
            <Heading title={heading} />
            <TableActions title={title} tableFilter={tableFilter} >
                {dataAnctions}
            </TableActions>

            {/* Table */}
            <CustomDataTable thead={datas.thead} datas={datas.data} />
        </div>
    )
}

export default CatalogItem