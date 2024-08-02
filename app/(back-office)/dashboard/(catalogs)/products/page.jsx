import React from 'react'
import CatalogItem from '@/components/backend/CatalogItem'
import data from '../../../../../data.json'
import ProductForm from '@/components/backend/catalogForms/ProductForm'
import DataActions from '@/components/backend/DataActions'
import TableFilter from '@/components/backend/CategoryFilter'

const page = () => {
    return (
        <>
            <CatalogItem
                datas={data}
                heading='Products'
                title='Product'
                tableFilter={<TableFilter />}
                dataAnctions={<DataActions title='Product' itemForm={<ProductForm />} />}
            />
        </>
    )
}

export default page
