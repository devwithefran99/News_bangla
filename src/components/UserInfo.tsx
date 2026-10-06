import React from 'react';
import Link from 'next/link';

const UserInfo = () => {
    return (
        <div>
            <div className="flex gap-2  bg-gray-100 justify-center">
          
           <Link href="/signin" className="btn bg-red-700 text-white">সাইন ইন</Link>     
            <Link href="/signup" className="btn bg-red-700 text-white">সাইন আপ</Link>
        </div>
        </div>
    );
};

export default UserInfo;