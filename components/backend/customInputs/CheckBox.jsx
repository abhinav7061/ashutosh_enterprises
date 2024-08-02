import React from 'react'

const CheckBox = ({ label, name, register, className }) => {
    return (
        <label htmlFor={name} className={`text-gray-800 dark:text-gray-400 inline-flex items-center ${className}`}>
            <input
                {...register(`${name}`)}
                id={name}
                type="checkbox" />
            {label}
        </label>
    )
}

export default CheckBox