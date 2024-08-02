import React from 'react'
import ArrayItemsInput from './ArrayItemsInput'
import { Controller } from 'react-hook-form'

const MultiInput = ({ label, name, values, setValue, control, labelClass, inputClass, inputWrapperClass, className, placeholder, readOnly }) => {
    const handleValues = (newTags) => {
        setValue(name, newTags);
    };

    return (
        <div className={`flex ${className}`}>
            <label className={`${labelClass}`}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={() => (
                    <ArrayItemsInput
                        values={values}
                        handleValues={handleValues}
                        inputClass={inputClass}
                        className={inputWrapperClass}
                        placeholder={placeholder}
                        readOnly={readOnly}
                    />
                )}
            />
        </div>
    )
}

export default MultiInput