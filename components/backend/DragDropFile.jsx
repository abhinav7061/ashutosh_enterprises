import { UploadCloud } from 'lucide-react';
import React, { useState, forwardRef } from 'react';
import { toast } from 'sonner';

// drag drop file component
const DragDropFile = forwardRef(({ id = '', name, label, onFileSelect, accept, message, className, multiple = false }, ref) => {
    // drag state
    const [dragActive, setDragActive] = useState(false);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // validate files
    const validateFiles = (files) => {
        const acceptedTypes = accept.split(',').map(type => type.trim());
        for (const file of files) {
            const fileType = file.type;
            console.log(fileType)
            const fileExtension = file.name.split('.').pop();
            const isValidType = acceptedTypes.some(
                (type) => {
                    console.log(type, type === fileType)
                    return type === fileType || type === `.${fileExtension}`
                }
            );
            if (!isValidType) {
                toast(`File type not accepted: ${file.name}`);
                return false;
            }
        }
        return true;
    };

    const handleFiles = (files) => {
        if (validateFiles(files)) {
            onFileSelect(files); // Call the provided function with the selected files
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(Array.from(e.dataTransfer.files));
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(Array.from(e.target.files));
        }
    };

    return (
        <div className={`h-44 text-center relative ${className}`} onDragEnter={handleDrag}>
            <input
                id={id}
                ref={ref}
                name={name}
                type="file"
                multiple={multiple}
                onChange={handleChange}
                accept={accept}
                className='hidden'
            />
            <label htmlFor={id} className="h-full flex items-center p-4 justify-center border rounded-lg border-dashed border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 cursor-pointer">
                <div className='flex flex-col items-center space-y-2'>
                    <UploadCloud className='text-green-500' height={46} width={46} />
                    <p className='dark:text-slate-300 text-slate-800'>Drag and drop here</p>
                    <i className='text-slate-400 text-xs leading-6'>{message}</i>
                    {/* <span className="hover:underline" type='button'>{label}</span> */}
                </div>
            </label>
            {dragActive && <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} className='absolute w-full h-full rounded-md top-0 right-0 bottom-0 left-0 border bg-black opacity-10 dark:opacity-35'></div>}
        </div>
    );
});

export default DragDropFile;
