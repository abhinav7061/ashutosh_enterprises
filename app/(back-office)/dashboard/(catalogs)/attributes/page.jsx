import React from 'react'
import CatalogItem from '@/components/backend/CatalogItem'
import data from '../../../../../data.json'

const page = () => {
    return (
        <>
            <CatalogItem
                datas={data}
                heading='Attributes'
                title='Attribute'
            />
        </>
    )
}

export default page
