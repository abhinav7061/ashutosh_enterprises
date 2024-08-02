"use client"
import React from 'react'
import SelectInput from './customInputs/SelectInput'
import Button from './Button'
import { Delete, DownloadCloud, Filter } from 'lucide-react'
import TextInput from './customInputs/TextInput'
import { useForm } from 'react-hook-form'
import { orderStatusOptions, orderLimitsOptions, paymentMethodOptions } from '@/constants/options'

const OrderActions = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="tab tab-enter">
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-xs mb-5">
                <div className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-5 py-2">
                            <TextInput
                                name='search'
                                placeholder='Search by Customer Name'
                                errors={errors}
                                register={register}
                            />
                            <SelectInput register={register} name='status' title='Status' options={orderStatusOptions} inputClass='h-12' />
                            <SelectInput register={register} name='orderLimits' title='Order limits' options={orderLimitsOptions} inputClass='h-12' />
                            <SelectInput register={register} name='method' title='Method' options={paymentMethodOptions} inputClass='h-12' />
                            <Button title='Download All Orders' icon={<DownloadCloud height={18} />} className='text-sm py-0 gap-0 h-12 bg-green-700 hover:bg-green-600' />
                        </div>
                        <div className="grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2">
                            <TextInput
                                name='startDate'
                                label='Start Date'
                                register={register}
                                errors={errors}
                                type='date'
                                className='flex-col'
                                labelClass='font-normal text-sm'
                                isRequired={false}
                            />
                            <TextInput
                                name='endDate'
                                label='End Date'
                                register={register}
                                errors={errors}
                                type='date'
                                className='flex-col'
                                labelClass='font-normal text-sm'
                                isRequired={false}
                            />
                            <div className="flex items-end gap-x-4">
                                <Button
                                    title='Filter'
                                    icon={<Filter size={16} />}
                                    type='submit'
                                    className='w-full h-12 bg-green-700 hover:bg-green-600'
                                />
                                <Button
                                    title='Reset'
                                    type='reset'
                                    icon={<Delete size={16} />}
                                    className='bg-gray-500 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 border w-full h-12'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrderActions