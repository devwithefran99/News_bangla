import Image from 'next/image';
import React from 'react';
import Navbar from './Navbar';

import UserInfo from './UserInfo';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    // console.log(date)
    return (
       <>
        <div className="flex justify-between items-center  container mx-auto">
            <div className="flex items-center gap-2 p-4 mx-auto">
            <div className="imgSection ">
                <Image width={50} height={50} src="/logo.webp" alt="Logo" />
            </div>
            <div className="textSection">
                <h1 className="text-2xl font-bold text-red-600">হলুদ জার্নালিস্ট</h1>
                <p className="text-sm">{date}</p>
            </div>
        </div>
        
        <UserInfo />
        </div>
        <Navbar />
        </>
    );   
};

export default Header;