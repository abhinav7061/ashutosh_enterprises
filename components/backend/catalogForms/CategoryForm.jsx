"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import FormStructure from './FormStructure';
import TextInput from '../customInputs/TextInput';
import TextareaInput from '../customInputs/TextareaInput';
import SwitchInput from '../customInputs/SwitchInput';
import UploadImage from '../customInputs/UploadImage';
import { generateSlug } from '@/lib/generateSlug';
import { makePostRequest } from '@/lib/apiRequest';
import objectToFormData from '@/lib/objectToFormData';
import treeData from '@/constants/treeData';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

const CategoryForm = ({
    initialData = {
        "title": "",
        "description": "",
        "image": null,
        "publish": true,
        "parentCategory": treeData[0]?.title
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
    const publishChecked = watch('publish');

    async function onSubmit(data) {
        const slug = generateSlug(data.title);
        const endpoint = 'categories'
        console.log(data);
        const dataForm = objectToFormData({ ...data, slug });
        const message = {
            success: "Successfully created category",
            error: "Error to create new category"
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

    const onSelect = (keys, info) => {
        const selectedNode = info.node;
        const title = selectedNode.title;
        setValue('parentCategory', title);
    };

    return (
        <FormStructure
            onSubmit={handleSubmit(onSubmit)}
            handleCancel={handleCancel}
            heading={isUpdate ? 'Update Category' : 'Add Category'}
            className='text-sm'
            loading={loading}
        >
            <TextInput
                name='title'
                label='Category Title/Name'
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />
            <TextareaInput
                name='description'
                label='Category Description'
                row={3}
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />
            <TextInput
                name='parentCategory'
                label='Parent Category'
                errors={errors}
                register={register}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                readOnly={true}
            />
            <div className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'>
                <div className='col-span-4 sm:col-span-2'>
                </div>
                <div className='col-span-8 sm:col-span-4'>
                    <Tree
                        onSelect={onSelect}
                        treeData={treeData}
                        defaultSelectedKeys={['0']}
                    />
                </div>
            </div>

            <UploadImage
                name='image'
                label='Upload Category Image'
                title='Category'
                control={control}
                errors={errors}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                image={image}
                setValue={setValue}
            />

            <SwitchInput
                name='publish'
                label='Publish'
                control={control}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                checked={publishChecked}
                height={30}
                width={75}
                handleDiameter={18}
                uncheckedIcon={<div className={`flex items-center justify-center h-full pr-2`}>No</div>}
                checkedIcon={<div className={`flex items-center justify-center h-full  ps-2`}>Yes</div>}
            />
        </FormStructure>
    )
}

export default CategoryForm