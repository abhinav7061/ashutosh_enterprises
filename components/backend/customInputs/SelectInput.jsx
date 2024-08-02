import { ChevronDown } from 'lucide-react';
import React from 'react';

const SelectInput = ({
    title,
    name,
    label,
    register,
    className,
    inputClass,
    labelClass,
    inputWraperClass,
    options = [{ title: '', value: '', disabled: false, className: '' }],
    multiple = false,
    key,
    defaultValue
}) => {
    // Add a hidden placeholder option if title is provided
    const enhancedOptions = title
        ? [{ title, value: '', hidden: true }, ...options]
        : options;

    return (
        <div className={`flex flex-col ${className}`} key={key}>
            {label && (
                <label htmlFor={name} className={`block font-medium text-gray-800 dark:text-gray-400 ${labelClass}`}>
                    {label}
                </label>
            )}
            <div className={`relative ${inputWraperClass}`}>
                <select
                    {...register(`${name}`)}
                    id={name}
                    name={name}
                    multiple={multiple}
                    defaultValue={defaultValue}
                    className={`block w-full border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 ${inputClass} appearance-none`}
                >
                    {enhancedOptions.map((option, idx) => (
                        <option
                            key={idx}
                            value={option?.value}
                            hidden={option?.hidden}
                            disabled={option?.disabled}
                            className={`text-base ${option?.className}`}
                        >
                            {option?.title}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                    <ChevronDown width={15} />
                </div>
            </div>
        </div>
    );
};

export default SelectInput;
