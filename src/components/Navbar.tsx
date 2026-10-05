import Link from 'next/link';
import React from 'react';

interface Navs {
    title: string;
    slug: string;
    topicId: string |  null;
    scrapable: boolean;
    url: string;
}

const Navbar = async ()  => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs : Navs[] = data.data

    const filteredNavs = navs.filter(n => n.scrapable)
    
    return (
        <div className='flex gap-4 justify-center bg-gray-200 p-2 mt-2'>
            <Link href='/'>হোম</Link>
            {filteredNavs.map((n, i) => <Link key={i} href={`/category/${n.slug}`}>{n.title} </Link>)}
        </div>
    );
};

export default Navbar;