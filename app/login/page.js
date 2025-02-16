"use client"
import Button from '@/components/backend/Button';
import SelectInput from '@/components/backend/customInputs/SelectInput';
import TextInput from '@/components/backend/customInputs/TextInput';
import LoginWithFacebook from '@/components/backend/LoginWithFacebook';
import LoginWithGoogle from '@/components/backend/LoginWithGoogle';
import { staffRoleOptions } from '@/constants/options';
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const page = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: { email: "", password: "" },
    });
    const onSubmit = async (data) => {
        console.log(data);
        reset();
    }
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img aria-hidden="true" className="object-cover w-full h-full" src="/login.png" alt="Office" />
                    </div>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                                Login
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextInput
                                    name='email'
                                    label='Email'
                                    type='email'
                                    errors={errors}
                                    register={register}
                                    className='flex flex-col'
                                    labelClass='text-sm'
                                />
                                <TextInput
                                    name='password'
                                    label='Password'
                                    type='password'
                                    errors={errors}
                                    register={register}
                                    validation={{
                                        required: "Password is required!",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 8 characters!"
                                        },
                                        pattern: {
                                            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*-])/g,
                                            message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character.'
                                        }
                                    }}
                                    className='flex flex-col'
                                    labelClass='text-sm'
                                />
                                <SelectInput
                                    name='role'
                                    label="Slelect Role"
                                    title='Your Role'
                                    register={register}
                                    options={staffRoleOptions}
                                    className='flex-col'
                                    labelClass='text-sm'
                                />
                                <Button
                                    type='submit'
                                    title='Login'
                                    className='bg-green-700 hover:bg-green-600 w-full text-sm h-12 mt-4'
                                />
                                <hr className="my-10" />
                                <LoginWithFacebook />
                                <LoginWithGoogle />
                            </form>
                            <p className="mt-4">
                                <Link className="text-sm font-medium text-green-700 dark:text-green-600 hover:underline" href="/forgot-password">Forgot your password</Link>
                            </p>
                            <p className="mt-1">
                                <Link className="text-sm font-medium text-green-700 dark:text-green-600 hover:underline" href="/signup">Create account</Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page