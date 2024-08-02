import React from 'react'
import CatalogItem from '@/components/backend/CatalogItem'
import data from '../../../../../data.json'
import DataActions from '@/components/backend/DataActions'
import CouponForm from '@/components/backend/catalogForms/CouponForm'

const page = () => {
    return (
        <>
            <CatalogItem
                datas={data}
                heading='Coupons'
                title='Coupons'
                dataAnctions={<DataActions title='Coupon' itemForm={<CouponForm />} />}
            />
        </>
    )
}

export default page
