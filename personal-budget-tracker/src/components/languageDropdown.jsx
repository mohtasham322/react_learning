import React, { useState } from 'react';

const languagedropdown = ({isOpen, onToggle}) => {

    return (
        <>
            <div className="relative">
                <span className="flex items-center text-white cursor-pointer" onClick={onToggle}>
                    <span className="mr-3">English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
                <div className={`absolute top-8 borderabsolute right-0 z-10 mt-2 w-56  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-out ${isOpen ? 'opacity-100  scale-100 block' : ' opacity-0 scale-95 hidden'}`} style={{ transition: 'opacity 0.3s ease-out, transform 0.3s ease-out' }}>
                    <ul>
                        <li className="block px-4 py-3  text-gray-700 cursor-pointer hover:bg-slate-300 w-full">English</li>
                        <li className="block px-4 py-3  text-gray-700 cursor-pointer hover:bg-slate-300 w-full">Urdu</li>
                    </ul>
                </div>
            </div>
        </>
    )
}



export default languagedropdown