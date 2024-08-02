import React from 'react'
import Button from '../Button'

const FormStructure = ({ heading = '', children, onSubmit, handleCancel, loading, className }) => {
    return (
        <div className="h-full bg-slate-50 dark:bg-slate-800 flex flex-col dark:text-gray-300 transition-[width] duration-700 animate-widthInc overflow-x-hidden">
            <div className="bg-slate-200 dark:bg-slate-900 p-6 pr-20">
                <h1 className="text-xl font-medium"> {heading} </h1>
                <p className="text-xs"> {heading} and necessary information from here</p>
            </div>
            <div className="overflow-auto flex-grow flex flex-col relative">
                <h1 className="text-green-700 border-b-2 border-green-700 p-3 w-fit">Basic Info</h1>
                <div className="border-t-[1px] dark:border-gray-700 h-0" />
                <form onSubmit={onSubmit} className={`flex-grow overflow-auto flex flex-col ${className}`}>
                    <div className='flex-grow overflow-auto p-8 lg:p-10'>
                        {children}
                    </div>
                    <div className="bg-slate-200 dark:bg-slate-900 px-8 py-5 lg:py-8 flex flex-col sm:flex-row gap-4">
                        <Button
                            title='Reset'
                            type='reset'
                            onClick={handleCancel}
                            className='w-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'
                        />
                        <Button
                            title='Save'
                            type='submit'
                            className='bg-green-700 hover:bg-green-600 w-full'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormStructure