import React from 'react';


const MostRead = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
   const mostRead = data.data ?? [];
    return (
        <div className='card p-6 bg-base-100 border-gray-200'>
            <h1 className='font-bold text-red-700'>সর্বাধিক পঠিত</h1>
            <div className='grid gap-5 mt-5'>
                {mostRead.map((n , i) => <div className='flex gap-2' key ={n.id}>
                  <p className='font-bold text-red-700'>{i + 1}.</p>  <h2>{n.title}</h2>
                </div>)}
            </div>
        </div>
    );
};

export default MostRead;