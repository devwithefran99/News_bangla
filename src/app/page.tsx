import Mainnews from '@/components/Mainnews';
import Marquee from '@/components/Marquee';
import React from 'react';

const page = async() => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  // console.log(data)
  const sections = data.data
  // console.log(sections)
  const MainNews = sections[0].articles


  return (
    <div>
      <Marquee />
      <div className='grid grid-cols-3 container mx-auto'>
        <div className='col-span-2 '>
          <Mainnews  news={MainNews}/>
        </div>

        <div className='col-span-1 bg-gray-200 p-10'>
          
        </div>
       
      </div>
    </div>
  );
};

export default page;