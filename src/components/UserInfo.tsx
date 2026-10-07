"use client"
import React from 'react';
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import { authClient } from '@/app/lib/auth-client';

const UserInfo = () => {
    const {data : session} = authClient.useSession() 
   const user = session?.user 

const hanndleSignOut = async () => {
    await authClient.signOut();
}

    return (
        <div>
            {user ? <div>
                <button onClick={hanndleSignOut} className="btn bg-red-700 text-white mx-2"> <IoIosLogOut /></button>
                <div className="avatar avatar-online avatar-placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-xl"> {user?.name?.charAt(0).toUpperCase()}</span>
  </div>
</div>

            </div> :  <div className="flex gap-2  bg-gray-100 justify-center">
          
           <Link href="/signin" className="btn bg-red-700 text-white">সাইন ইন</Link>     
            <Link href="/signup" className="btn bg-red-700 text-white">সাইন আপ</Link>
        </div>}
           
        </div>
    );
};

export default UserInfo;