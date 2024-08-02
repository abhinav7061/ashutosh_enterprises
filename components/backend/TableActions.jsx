import React from 'react'
import { Download, Upload } from 'lucide-react'
import TableSearching from './TableSearching'

const TableActions = ({ title = '', children, tableFilter }) => {
    return (
        <>
            <div className="flex flex-col md:justify-between md:items-center  md:flex-row p-4 py-7 rounded-lg bg-white dark:bg-slate-800 gap-4">
                <div className='flex gap-3'>
                    <button className='flex items-center gap-2 text-sm p-2 border border-gray-300 hover:border-lime-500 hover:text-lime-500 rounded-md'><Upload size={18} /> Exports</button>
                    <button className='flex items-center gap-2 text-sm p-2 border border-gray-300 hover:border-yellow-500 hover:text-yellow-500 rounded-md'><Download size={18} /> Imports</button>
                </div>
                {children}
            </div>

            {/* Searching  */}
            <TableSearching title={title} >
                {tableFilter}
            </TableSearching>
        </>
    )
}

export default TableActions