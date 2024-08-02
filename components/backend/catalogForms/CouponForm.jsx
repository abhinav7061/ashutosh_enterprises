"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import FormStructure from './FormStructure';
import TextInput from '../customInputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import generateCouponCode from '@/lib/generateCouponCode';
import { IndianRupee, Percent } from 'lucide-react';
import objectToFormData from '@/lib/objectToFormData';
import SwitchInput from '../customInputs/SwitchInput';
import UploadImage from '../customInputs/UploadImage';

const CouponForm = ({
    initialData = {
        "image": null,
        "title": "",
        "expiryDate": "",
        "couponCode": "",
        "discountType": false,
        "discount": null,
        "minAmount": null,
        "publish": false
    },
    isUpdate = false
}) => {
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
    const [couponCodeDisabled, setCouponCodeDisabled] = useState(true);

    const discountChecked = watch('discountType');
    const publishChecked = watch('publish');
    const title = watch('title');
    const expiryDate = watch('expiryDate');
    const image = watch('image');

    useEffect(() => {
        if (title && expiryDate) {
            const couponCode = generateCouponCode(title, expiryDate);
            setValue('couponCode', couponCode);
            setCouponCodeDisabled(false);
        } else {
            setValue('couponCode', '');
            setCouponCodeDisabled(true);
        }
    }, [title, expiryDate, setValue]);

    async function onSubmit(data) {
        const endpoint = 'coupons'
        const discountType = data.discountType ? 'percentage' : 'fixed'
        const dataForm = objectToFormData({ ...data, discountType });
        const message = {
            success: "Successfully created coupons",
            error: "Error to create new coupons"
        }
        console.log(data);
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
            heading={isUpdate ? 'Update Coupon' : 'Add Coupon'}
            className='text-sm'
            loading={loading}
        >

            <div className='flex flex-col sm:flex-row sm:gap-8'>

                <TextInput
                    name='title'
                    label='Compaign Name'
                    errors={errors}
                    register={register}
                    className='sm:w-1/2 flex-col gap-3'
                    inputClass=''
                />

                <TextInput
                    name='expiryDate'
                    label='Enter Expiry Date'
                    type='date'
                    errors={errors}
                    register={register}
                    className='sm:w-1/2 flex-col gap-3'
                    inputClass=''
                />

            </div>

            <UploadImage
                name='image'
                title='Image'
                label='Campaign Banner'
                errors={errors}
                control={control}
                image={image}
                setValue={setValue}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <TextInput
                name='couponCode'
                label='Coupon Code'
                errors={errors}
                register={register}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                defaultValue=""
                isDisabled={couponCodeDisabled}
            />

            <SwitchInput
                name='discountType'
                label='Discount Type'
                control={control}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                checked={discountChecked}
                height={33}
                width={125}
                handleDiameter={20}
                uncheckedIcon={<div className={`flex items-center justify-center h-full pr-4`}>Fixed</div>}
                checkedIcon={<div className={`flex items-center justify-center h-full  ps-12`}>Percentage</div>}
            />

            <TextInput
                name='discount'
                label='Discount'
                type='number'
                errors={errors}
                register={register}
                icon={discountChecked ? <Percent height={18} className='text-slate-400' /> : <IndianRupee height={18} className='text-slate-400' />}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <TextInput
                name='minAmount'
                label='Minimum Amount'
                type='number'
                errors={errors}
                register={register}
                icon={<IndianRupee height={18} className='text-slate-400' />}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <SwitchInput
                name='publish'
                label='Publish'
                control={control}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                checked={publishChecked}
                height={30}
                width={75}
                handleDiameter={18}
                uncheckedIcon={<div className={`flex items-center justify-center h-full pr-2`}>No</div>}
                checkedIcon={<div className={`flex items-center justify-center h-full  ps-2`}>Yes</div>}
            />

        </FormStructure >
    )
}

export default CouponForm