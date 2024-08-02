"use client"
import React, { useState } from 'react'
import { currencyOptions, timeZones, dateFormatOptions, recieptSizeOptions } from '@/constants/options'
import Button from '@/components/backend/Button'
import SelectInput from '@/components/backend/customInputs/SelectInput'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/backend/customInputs/TextInput'
import Heading from '@/components/backend/Heading'

const page = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: {} });
    const inputCommonProps = {
        register,
        errors,
        className: 'grid sm:grid-cols-5 items-center gap-3 md:gap-5 lg:gap-6 mb-6',
        labelClass: 'block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2',
        inputClass: 'col-span-5 sm:col-span-3 h-12'
    };
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <>
            <Heading title='Settings' className='mb-8' />
            <div className="sm:container md:p-6 p-4 w-full mx-auto bg-white   dark:bg-slate-800 dark:text-slate-200 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="pt-4 lg:px-40 md:px-5 flex-grow w-full max-h-full pb-0">
                    <TextInput
                        label="Number of images per product"
                        name="imageNumber"
                        type='number'
                        defaultValue='5'
                        {...inputCommonProps}
                    />

                    <SelectInput
                        name="default_currency"
                        label="Default currency"
                        options={currencyOptions}
                        {...inputCommonProps}
                        inputWraperClass={inputCommonProps.inputClass}
                    />

                    <SelectInput
                        name="default_time_zone"
                        title='Default Time Zone'
                        label="Default Time Zone"
                        options={timeZones}
                        {...inputCommonProps}
                        inputWraperClass={inputCommonProps.inputClass}
                    />

                    <SelectInput
                        name="default_date_format"
                        label="Default Date Format"
                        options={dateFormatOptions}
                        {...inputCommonProps}
                        inputWraperClass={inputCommonProps.inputClass}
                    />

                    <SelectInput
                        name="receipt_size_width"
                        label="Receipt size (width)"
                        options={recieptSizeOptions}
                        {...inputCommonProps}
                        inputWraperClass={inputCommonProps.inputClass}
                    />

                    <TextInput
                        label="Shop name"
                        name="shop_name"
                        placeholder='Shop Name'
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Company Name"
                        name="company_name"
                        placeholder='Company Name'
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Vat Number"
                        name="vat_number"
                        placeholder="Vat Number"
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Address"
                        name="address"
                        placeholder="Address"
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Post Code"
                        name="post_code"
                        placeholder="Post Code"
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Contact"
                        name="contact"
                        type='tel'
                        placeholder="Contact Number"
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...inputCommonProps}
                    />
                    <TextInput
                        label="Web site"
                        name="website"
                        placeholder="Web Site"
                        {...inputCommonProps}
                    />
                    <div className="flex justify-end gap-4 pb-6 col-span-5">
                        <Button title='Reset' type='button' onClick={() => reset()} className='bg-gray-500 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 border' />
                        <Button title='Update' type='submit' className='bg-green-700 hover:bg-green-600' />
                    </div>
                </form >
            </div >
        </>
    )
}

export default page