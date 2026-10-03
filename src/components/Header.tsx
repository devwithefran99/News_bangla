import Image from 'next/image';
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    console.log(date)
    return (
       <>
        <div className="flex justify-between items-center  bg-gray-100 container mx-auto">
            <div className="flex items-center gap-2 p-4 bg-gray-100 mx-auto">
            <div className="imgSection ">
                <Image width={50} height={50} src="/logo.webp" alt="Logo" />
            </div>
            <div className="textSection">
                <h1 className="text-2xl font-bold text-red-600">হলুদ জার্নালিস্ট</h1>
                <p className="text-sm">{date}</p>
            </div>
        </div>
        <div className="flex gap-2  bg-gray-100 justify-center">
            <button className="btn btn-outline">সাইন ইন</button>
            <button className="btn bg-red-700 text-white">সাইন আপ</button>
        </div>

        </div>
        <Navbar />
        </>
    );
};

export default Header;