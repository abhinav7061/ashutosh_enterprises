"use client"
import React from 'react'
import datas from '../../../../data.json'
import CustomDataTable from '@/components/backend/CustomDataTable'
import OrderActions from '@/components/backend/OrderActions'
import Heading from '@/components/backend/Heading'
import Select from '@/components/backend/customInputs/SelectInput'
import { useForm } from 'react-hook-form'
import { orderStatusOptions } from '@/constants/options'

const page = () => {
    return (
        <>
            <Heading title='Orders' className='mb-4' />
            <OrderActions />
            <CustomDataTable thead={datas.thead} datas={datas.data} actions={<Actions />} />
        </>
    )
}

export default page

const Actions = () => {
    const {
        register
    } = useForm();
    return (
        <>
            <Select
                register={register}
                name='action'
                options={orderStatusOptions}
                className='h-auto py-1 px-2 w-14'
            />
        </>
    )
}