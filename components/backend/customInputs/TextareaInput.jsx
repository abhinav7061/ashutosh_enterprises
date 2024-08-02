"use client";
export default function TextareaInput({
    label,
    name,
    register,
    errors,
    row = 1,
    className,
    labelClass,
    inputClass,
    isRequired = true,
    validation,
    key,
}) {
    return (
        <div className={`flex ${className}`} key={key}>
            <label
                htmlFor={name}
                className={`block text-gray-800 dark:text-gray-400 font-medium ${labelClass}`}
            >
                {label}
            </label>
            <div className={`flex flex-col ${inputClass}`}>
                <textarea
                    {...register(
                        `${name}`,
                        validation ? { ...validation } : {
                            required: {
                                value: isRequired,
                                message: `${name.charAt(0).toUpperCase() + name.slice(1)} is rerquired`
                            },
                            minLength: {
                                value: 6,
                                message: 'Too Short!'
                            }
                        }
                    )}
                    name={name}
                    id={name}
                    rows={row}
                    className="block w-full border p-3 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2"
                    placeholder={`Type the ${label.toLowerCase()}`}
                    defaultValue={""}
                />
                {errors[`${name}`] && (
                    <span className="text-xs ps-2 text-red-500 ">{errors[`${name}`].message}</span>
                )}
            </div>
        </div>
    );
}
