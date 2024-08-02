"use client"
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import FormStructure from './FormStructure';
import TextInput from '../customInputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import { IndianRupee } from 'lucide-react';
import objectToFormData from '@/lib/objectToFormData';
import SwitchInput from '../customInputs/SwitchInput';
import UploadImage from '../customInputs/UploadImage';
import TextareaInput from '../customInputs/TextareaInput';
import { generateSlug } from '@/lib/generateSlug';
import MultiInput from '../customInputs/MultiInput';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';
import SelectInput from '../customInputs/SelectInput';
import { toast } from 'sonner';
import arrayToOptions from '@/Helper/arrayToOptions';
import treeData from '@/constants/treeData';

const ProductForm = ({
    initialData = {
        "image": null,
        "name": "",
        "barcode": "",
        "categories": [],
        "defaultCategory": null,
        "description": "",
        "price": 0,
        "salePrice": 0,
        "quantity": 0,
        "tags": [],
        "publish": true
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

    const publishChecked = watch('publish');
    const image = watch('image');
    const tags = watch('tags');
    const categories = watch('categories');
    const defaultCategoryOptions = arrayToOptions(categories);

    async function onSubmit(data) {
        const endpoint = 'products';
        const slug = generateSlug(data.name);
        const dataForm = objectToFormData({ ...data, slug });
        const message = {
            success: "Successfully created product",
            error: "Error to create new product"
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

    const onSelect = (keys, info) => {
        const selectedNode = info.node;
        const title = selectedNode.title;
        if (categories.includes(title)) {
            toast(`The ${title} has been already selected`);
            return;
        }
        const newCategories = [...categories, title];
        setValue('categories', newCategories);
    };

    useEffect(() => {
        setValue('defaultCategory', defaultCategoryOptions[defaultCategoryOptions.length - 1]?.value);
    }, [defaultCategoryOptions])


    return (
        <FormStructure
            onSubmit={handleSubmit(onSubmit)}
            handleCancel={handleCancel}
            heading={isUpdate ? 'Update Product' : 'Add Product'}
            className='text-sm'
            loading={loading}
        >

            <div className='mb-8 flex flex-col sm:flex-row sm:gap-8'>

                <TextInput
                    name='name'
                    label='Product Name'
                    errors={errors}
                    register={register}
                    className='sm:w-1/2 flex-col gap-3'
                />

                <TextInput
                    name='barcode'
                    label='Product Barcode'
                    errors={errors}
                    register={register}
                    className='sm:w-1/2 flex-col gap-3'
                />

            </div>

            <TextareaInput
                name='description'
                label='Product Description'
                row={3}
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                defaultValue=""
            />

            <UploadImage
                name='image'
                title='Images'
                label='Product images'
                errors={errors}
                control={control}
                image={image}
                setValue={setValue}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                maxImageAllowed={5}
            />

            <TextInput
                name='category'
                label='Product Category'
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
                defaultValue=""
            />

            <MultiInput
                name='categories'
                label='Category'
                values={categories}
                control={control}
                setValue={setValue}
                className='text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                labelClass='col-span-4 sm:col-span-2'
                inputWrapperClass='col-span-8 sm:col-span-4'
                placeholder='Select Categories'
                readOnly={true}
            />

            <div className=' mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'>
                <div className='col-span-4 sm:col-span-2'>

                </div>
                <div className='col-span-8 sm:col-span-4'>
                    <Tree
                        checkable
                        onSelect={onSelect}
                        treeData={treeData}
                    />
                </div>
            </div>

            <SelectInput
                name='defaultCategory'
                label='Default Category'
                title='Default Category'
                register={register}
                options={defaultCategoryOptions}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputWraperClass='col-span-8 sm:col-span-4 h-12'
                inputClass='h-full'
                labelClass='col-span-4 sm:col-span-2'
            />

            <TextInput
                name='price'
                label='Product Price'
                type='number'
                errors={errors}
                register={register}
                icon={<IndianRupee height={18} className='text-slate-400' />}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <TextInput
                name='salePrice'
                label='Sale Price'
                type='number'
                errors={errors}
                register={register}
                icon={<IndianRupee height={18} className='text-slate-400' />}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <TextInput
                name='quantity'
                label='Product Quantity'
                type='number'
                errors={errors}
                register={register}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                inputClass='col-span-8 sm:col-span-4'
                labelClass='col-span-4 sm:col-span-2'
            />

            <MultiInput
                name='tags'
                label="Enter Category Tags"
                values={tags}
                control={control}
                setValue={setValue}
                className='mb-8 text-sm grid grid-cols-6 gap-3 md:gap-5 xl:gap-6'
                labelClass='col-span-4 sm:col-span-2'
                inputWrapperClass='col-span-8 sm:col-span-4'
                placeholder='Product Tag (Write then press enter to add new tag)'
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

        </FormStructure >
    )
}

export default ProductForm