import React from 'react'
import Switch from "react-switch";
import { Controller } from 'react-hook-form';

export default function SwitchInput({
    name,
    label,
    key,
    control,
    checked,
    className,
    labelClass,
    uncheckedIcon,
    checkedIcon,
    inputClass,
    height = 16,
    width = 35,
    handleDiameter = 13,
}) {
    return (
        <div className={`flex mb-6 ${className}`} key={key}>
            <label
                htmlFor={name}
                className={`block text-gray-800 dark:text-gray-400 font-medium ${labelClass}`}
            >
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Switch
                        name={name}
                        id={name}
                        checked={checked}
                        onChange={(checked) => {
                            field.onChange(checked);
                        }}
                        className={`font-bold text-white ${inputClass}`}
                        onColor="#219635"
                        offColor="#df2e2e"
                        onHandleColor="#FFFFFF"
                        offHandleColor="#FFFFFF"
                        height={height}
                        width={width}
                        handleDiameter={handleDiameter}
                        uncheckedIcon={uncheckedIcon}
                        checkedIcon={checkedIcon}
                    />
                )}
            />
        </div>
    );
};
