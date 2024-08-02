"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import getPaginationRange from '@/Helper/getPaginationRange';

const CustomDataTable = ({ thead = [], datas = [], actions }) => {
    const PAGE_SIZE = 10;
    const numberOfPages = Math.ceil(datas.length / PAGE_SIZE);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const currentDisplayedData = datas.slice(startIndex, startIndex + PAGE_SIZE);

    const paginationRange = getPaginationRange(numberOfPages, currentPage);

    return (
        <div className="relative overflow-x-auto shadow-md rounded-lg border border-slate-300 dark:border-slate-500">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        {thead.map((item, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {item}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentDisplayedData.map((data, id) => (
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700" key={id}>
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id={`checkbox-table-search-${id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor={`checkbox-table-search-${id}`} className="sr-only">checkbox</label>
                                </div>
                            </td>
                            {thead.map((item, index) => (
                                <td className="px-6 py-4" key={index}>
                                    {data[item] ? data[item] : '___'}
                                </td>
                            ))}
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                {actions}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">{`${startIndex + 1} - ${Math.min(startIndex + PAGE_SIZE, datas.length)}`}</span> of <span className="font-semibold text-gray-900 dark:text-white">{datas.length}</span>
                </span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <button onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1} className="flex items-center justify-center h-8 leading-tight p-1 text-gray-700 bg-transparent rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <ChevronLeft height={15} />
                        </button>
                    </li>
                    {paginationRange.map((page, index) => (
                        <li key={index}>
                            <button
                                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                                className={`flex items-center justify-center px-4 rounded-lg h-8 ms-0 leading-tight
                                    ${currentPage !== page
                                        ? `${typeof page === 'number' ? "text-gray-700 bg-transparent hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : ""}`
                                        : "bg-green-600 hover:bg-green-700"
                                    }`}
                                disabled={typeof page !== 'number'}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === numberOfPages} className="flex items-center justify-center h-8 leading-tight p-1 text-gray-700 bg-transparent rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <ChevronRight height={15} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CustomDataTable;
