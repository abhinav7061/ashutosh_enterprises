import React from 'react'
import CatalogItem from '@/components/backend/CatalogItem'
import data from '../../../../../data.json'
import CategoryForm from '@/components/backend/catalogForms/CategoryForm'
import DataActions from '@/components/backend/DataActions'

const page = () => {
    return (
        <>
            <CatalogItem
                datas={data}
                heading='Categories'
                title='Category'
                dataAnctions={<DataActions title='Category' itemForm={<CategoryForm />} />}
            />
        </>
    )
}

export default page
