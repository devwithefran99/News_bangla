import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headline {
    id: string;
    title: string;
    url: string;
    image: string;
    category: string;
    publishedAt: string;
}

const Marquee = async () => {

    const  res = await  fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines : Headline[] = data.data
    // console.log(headlines);
    return (
        <div className='bg-red-700 text-white'>
           <div className='container mx-auto flex items-center '>
            <div className='p-2 bg-red-800 text-white'>Breaking</div>
             <MarqueeText direction="right" duration={15} loop={true} className='p-2'>
                {headlines.map(h => <span key={h.id} className='flex items-center'>
                <span>{h.title}</span>
                <span className='mx-5'> • </span>
            </span>)}
            </MarqueeText>
           </div>
        </div>
    );
};

export default Marquee;