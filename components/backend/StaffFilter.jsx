"use client"
import React from 'react'
import Select from './customInputs/SelectInput'
import { useFormContext } from 'react-hook-form'
import { staffRoleOptions, staffStatusOption } from '@/constants/options'

const StaffFilter = () => {
    const { register } = useFormContext();
    return (
        <div className='flex flex-col md:flex-row w-full gap-4'>
            <Select
                name='staffRole'
                register={register}
                title='Staff Role'
                options={staffRoleOptions}
                className='w-full md:w-1/2'
                inputClass='h-12 border-gray-300'
            />
            <Select
                name='status'
                register={register}
                title='Status'
                options={staffStatusOption}
                className='w-full md:w-1/2'
                inputClass='h-12 border-gray-300'
            />
        </div>
    )
}

export default StaffFilter
