'use client'
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

const ArrayItemsInput = ({ values, handleValues, className, inputClass, placeholder, maxValuesAllowed = 3, readOnly = false }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            if (values.length >= maxValuesAllowed) {
                toast.error(`You can not add more than "${maxValuesAllowed}" values`);
                return;
            } else if (values.some(item => item === inputValue.trim())) {
                toast.error(`"${inputValue.trim()}" has been already included`);
                return;
            }
            const newTags = [...values, inputValue.trim()];
            handleValues(newTags);
            setInputValue('');
        }
        else if (e.key === 'Backspace' && !inputValue) {
            removeTag(values.length - 1);
        }
    };

    const removeTag = (index) => {
        const newTags = values.filter((_, i) => i !== index);
        handleValues(newTags);
    };

    return (
        <div className={`border border-gray-200 dark:border-gray-600 rounded p-[2] flex flex-wrap items-center text-sm ${className}`}>
            {values.map((value, index) => (
                <divcategories
                    key={index}
                    className="bg-blue-500 text-white rounded p-1 m-1 flex items-center"
                >
                    {value}
                    <X
                        width={14}
                        height={14}
                        onClick={() => removeTag(index)}
                        className="ml-1 cursor-pointer hover:bg-red-400 shrink-0 rounded flex items-center justify-center p-[1px]"
                    />
                </divcategories>
            ))}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`flex-grow p-2 m-1 border border-slate-200 dark:border-slate-600 outline-none rounded dark:text-gray-300 leading-5 px-3 bg-gray-100 focus:bg-white dark:focus:bg-gray-700 dark:bg-gray-700 min-w-40 ${inputClass}`}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </div>
    );
};

export default ArrayItemsInput;