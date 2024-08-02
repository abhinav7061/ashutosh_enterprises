import { validationRules } from '@/constants/validationRules'
import React from 'react'

const TextInput = ({
    errors,
    register,
    label = '',
    icon,
    name = '',
    className,
    labelClass,
    inputClass,
    type = "text",
    placeholder,
    isRequired = true,
    defaultValue = "",
    isDisabled = false,
    validation,
    readOnly,
    key
}) => {
    return (
        <div className={`flex ${className}`} key={key}>
            <label
                htmlFor={name}
                className={`block text-gray-800 dark:text-gray-400 font-medium ${labelClass}`}
            >
                {label}
            </label>
            <div className={`flex flex-col w-full ${inputClass}`}>
                <div className={`relative flex flex-col`}>
                    {icon && <div className="absolute pointer-events-none flex items-center justify-center h-full w-8 text-slate-500">
                        {icon}
                    </div>}
                    <input
                        {...register(
                            `${name}`,
                            validation ? { ...validation } : {
                                required: {
                                    value: isRequired,
                                    message: `${name.charAt(0).toUpperCase() + name.slice(1)} is rerquired`
                                },
                                ...validationRules[`${type}`],
                            }
                        )}
                        type={type}
                        id={name}
                        name={name}
                        defaultValue={defaultValue}
                        autoComplete={name}
                        disabled={isDisabled}
                        className={`block w-full border p-3 ${icon ? 'ps-9' : ''} text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2`}
                        placeholder={placeholder ? placeholder : `Type the ${label.toLowerCase()}`}
                        required={isRequired}
                        readOnly={readOnly}
                    />
                </div>
                {errors[`${name}`] && (
                    <span className="text-xs ps-2 text-red-500 ">{errors[`${name}`].message}</span>
                )}
            </div>
        </div>
    )
}

export default TextInput