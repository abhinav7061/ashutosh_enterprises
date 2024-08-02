"use client"
import { Delete, Filter, Search } from 'lucide-react'
import React from 'react'
import TextInput from './customInputs/TextInput'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import Button from './Button'

const TableSearching = ({ children, title = '' }) => {
    const methods = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const onReset = () => {
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col md:flex-row p-4 py-7 bg-white dark:bg-slate-800 rounded-lg gap-4">
                <div className='w-full md:w-2/3'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={children ? 'w-full md:w-1/3 relative' : 'w-full relative'}>
                            <TextInput
                                register={methods.register}
                                name="search"
                                placeholder={`Search by ${title} name`}
                                errors={methods.formState.errors}
                                icon={<Search width={18} />}
                                inputClass='w-full'
                            />
                        </div>
                        <div className={children ? 'w-full md:w-2/3' : 'w-0'}>
                            {children}
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 flex gap-4'>
                    <Button
                        title='Filter'
                        icon={<Filter size={16} />}
                        type='submit'
                        className='flex-grow bg-green-700 hover:bg-green-600 h-12'
                    />
                    <Button
                        title='Reset'
                        icon={<Delete size={16} />}
                        type='button'
                        onClick={onReset}
                        className='bg-gray-500 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 border flex-grow h-12'
                    />
                </div>
            </form>
        </FormProvider>
    )
}

export default TableSearching
