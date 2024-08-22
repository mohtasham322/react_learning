import React, { useState } from 'react';

const notificationdropdown = ({isOpen, onToggle}) => {

    return (
        <>
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 md:size-8 ml-3 md:ml-7 cursor-pointer text-white" onClick={onToggle}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                <div className={`absolute top-8 borderabsolute right-0 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-out ${isOpen ? 'opacity-100 block scale-100' : 'opacity-0 hidden scale-95'}`} style={{ transition: 'opacity 0.3s ease-out, transform 0.3s ease-out' }}>
                    <ul>
                        <li className="block px-4 py-3  text-gray-700 cursor-pointer hover:bg-slate-300">English</li>
                        <li className="block px-4 py-3  text-gray-700 cursor-pointer hover:bg-slate-300">Urdu</li>
                    </ul>
                </div>
            </div>
        </>
    )
}



export default notificationdropdown