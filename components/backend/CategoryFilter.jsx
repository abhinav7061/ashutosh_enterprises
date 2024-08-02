"use client"
import React from 'react'
import Select from './customInputs/SelectInput'
import { useFormContext } from 'react-hook-form'
import { categoryOptions, priceOptions } from '@/constants/options'

const CategoryFilter = () => {
    const { register } = useFormContext();
    return (
        <div className='flex flex-col md:flex-row w-full gap-4'>
            <Select
                name='category'
                register={register}
                title='Category'
                options={categoryOptions}
                className='w-full md:w-1/2'
                inputClass='h-12 border-gray-300'

            />
            <Select
                name='price'
                register={register}
                title='Price'
                options={priceOptions}
                className='w-full md:w-1/2'
                inputClass='h-12 border-gray-300'
            />
        </div>
    )
}

export default CategoryFilter
