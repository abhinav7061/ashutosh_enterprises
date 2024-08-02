"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import FormStructure from './FormStructure';
import TextInput from '../customInputs/TextInput';
import UploadImage from '../customInputs/UploadImage';
import { generateSlug } from '@/lib/generateSlug';
import { makePostRequest } from '@/lib/apiRequest';
import objectToFormData from '@/lib/objectToFormData';
import treeData from '@/constants/treeData';
import SelectInput from '../customInputs/SelectInput';
import { staffRoleOptions } from '@/constants/options';

const StaffForm = ({
    initialData = {
        "name": "",
        "image": null,

    },
    isUpdate = false }) => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: initialData,
    });
    const [loading, setLoading] = useState(false);
    const image = watch('image');

    async function onSubmit(data) {
        const slug = generateSlug(data.title);
        const endpoint = 'categories'
        console.log(data);
        const dataForm = objectToFormData({ ...data, slug });
        const message = {
            success: "Successfully created Staff",
            error: "Error to create new Staff"
        }
        makePostRequest(
            setLoading,
            endpoint,
            dataForm,
            message,
            () => {
                reset();
            }
        )
    }

    const handleCancel = () => {
        reset();
    };

    return (
        <FormStructure
            onSubmit={handleSubmit(onSubmit)}
            handleCancel={handleCancel}
            heading={isUpdate ? 'Update Staff' : 'Add Staff'}
            className='text-sm'
            loading={loading}
        >

            <UploadImage
                name='image'
                label="Upload Staff's Image"
                title='Staff'
                control={control}
                errors={errors}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                image={image}
                setValue={setValue}
            />
            <TextInput
                name='name'
                label="Staff's Name"
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />
            <TextInput
                name='email'
                label="Staff's Email"
                errors={errors}
                type='email'
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />
            <TextInput
                name='password'
                label="Password"
                errors={errors}
                type='password'
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />
            <TextInput
                name='phone'
                label="Contact Number"
                type='tel'
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />
            <TextInput
                name='joiningDate'
                label="Joining Date"
                type='date'
                errors={errors}
                register={register}
                defaultValue={new Date().toISOString().substring(0, 10)}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <SelectInput
                title='Staff Role'
                name='role'
                label='Staff Role'
                errors={errors}
                register={register}
                options={staffRoleOptions}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputWraperClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                inputClass='h-12'
            />

        </FormStructure>
    )
}

export default StaffForm