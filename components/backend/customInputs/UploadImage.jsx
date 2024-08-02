"use client"
import React, { useState, useEffect } from 'react';
import DragDropFile from '../DragDropFile';
import { X } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { toast } from 'sonner';
import numberToWord from '@/Helper/numberToword';

export default function UploadImage({
    title = '',
    name,
    label,
    key,
    control,
    errors,
    image,
    className,
    labelClass,
    inputClass,
    isRequired = true,
    setValue,
    validation,
    maxImageAllowed = 1,
}) {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        if (Array.isArray(image)) {
            const urls = image.map(img => URL.createObjectURL(img));
            setImageUrls(urls);
        } else if (image) {
            setImageUrls([URL.createObjectURL(image)]);
        } else {
            setImageUrls([]);
        }
    }, [image]);

    // const handleFileSelect = (newFiles) => {
    //     const currentFiles = Array.isArray(image) ? image : image ? [image] : [];
    //     const totalFiles = currentFiles.concat(newFiles);

    //     if (totalFiles.length > maxImageAllowed) {
    //         toast.error(`You can only upload up to ${maxImageAllowed} images`);
    //     } else {
    //         setValue(name, totalFiles);
    //     }
    // };

    const handleFileSelect = (newFiles) => {
        const currentFiles = Array.isArray(image) ? image : image ? [image] : [];
        const totalFiles = currentFiles.concat(newFiles);

        if (totalFiles.length > maxImageAllowed) {
            const extraFilesCount = totalFiles.length - maxImageAllowed;
            const updatedFiles = newFiles.length > maxImageAllowed
                ? newFiles.slice(-maxImageAllowed) // if newFiles are greater than maxImageAllowed, slice the last maxImageAllowed files
                : [...currentFiles.slice(extraFilesCount), ...newFiles]; // Replace old files with new ones

            setValue(name, updatedFiles);
            toast.info(`You tried to upload more than ${numberToWord(maxImageAllowed)} images. So some images are removed.`);
        } else {
            setValue(name, totalFiles);
        }
    };

    const validationRules = validation ? { ...validation } : {
        required: {
            value: isRequired,
            message: `${name.charAt(0).toUpperCase() + name.slice(1)} image is required`
        },
        validate: {
            acceptedFormats: (files) => {
                if (!Array.isArray(files)) files = [files];
                return files.every(file => ['image/jpeg', 'image/png', 'image/jpeg'].includes(file?.type)) || 'Only JPG/PNG/JPEG formats are allowed';
            },
            maxFileSize: (files) => {
                if (!Array.isArray(files)) files = [files];
                return files.every(file => file?.size <= 200000) || 'File size should be less than 200KB';
            },
            maxImageCount: (files) => {
                if (!Array.isArray(files)) files = [files];
                return files.length <= maxImageAllowed || `You can only upload up to ${maxImageAllowed} images`;
            }
        }
    };

    return (
        <div className={`flex mb-6 ${className}`} key={key}>
            <label
                htmlFor="imageUpload"
                className={`block text-gray-800 dark:text-gray-400 font-medium ${labelClass}`}
            >
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                rules={validationRules}
                render={({ field }) => (
                    <div className={`flex flex-col ${inputClass}`}>
                        <DragDropFile
                            {...field}
                            id="imageUpload"
                            label={`Upload Image${(maxImageAllowed > 1) ? 's' : ''}`}
                            onFileSelect={handleFileSelect}
                            accept='image/png, image/jpg, image/jpeg'
                            multiple={true}
                            message={`(only *.jpeg, *.jpg, *.png images with size less than 200KB will be accepted, up to ${maxImageAllowed} images)`}
                        />
                        {imageUrls.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-4">
                                {imageUrls.map((url, index) => (
                                    <div key={index} className='relative flex justify-center items-center group rounded-md p-2 h-min w-24 border dark:border-slate-700'>
                                        <button
                                            type='button'
                                            className='absolute flex items-center justify-center h-6 w-6 bg-red-600 -top-2 -right-2 rounded-full'
                                            onClick={() => {
                                                const updatedImages = Array.from(image);
                                                updatedImages.splice(index, 1);
                                                setValue(name, updatedImages.length > 0 ? updatedImages : null);
                                            }}
                                        >
                                            <X strokeWidth={3} height={14} />
                                        </button>
                                        <img
                                            src={url}
                                            alt={`${title} image ${index + 1}`}
                                            className='overflow-auto max-h-24 rounded-md'
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors[`${name}`] && (
                            <span className="text-xs ps-2 text-red-500 ">{errors[`${name}`].message}</span>
                        )}
                    </div>
                )}
            />
        </div>
    );
}
