import Image from 'next/image';
import React from 'react';
interface News {
    id: string;
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    category: string;
    publishedAt: string;
    imageAlt : string;
}

const Mainnews = ({ news}: { news: News[] }) => {
    const [FirstNews , ...OtherNews] = news
    console.log(news);
    return (
        <div className='flex gap-3'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
    height={300}
    width={3250}
      src={FirstNews.imageUrl}
      alt={FirstNews.imageAlt} />
  </figure>
  <p className='text-red-600 font-bold'>{FirstNews.category}</p>
  <div className="card-body">
    <h2 className="card-title">{FirstNews.title}</h2>
    <p>{FirstNews.description}</p>
    
  </div>
</div>

<div>
    
    {OtherNews.slice(0,4).map( othernews => <div key={othernews.id} className='bg-gray-100 p-6 m-3'>
         <p className='text-red-600 font-bold'>{FirstNews.category}</p>
        <div>{othernews.title}</div>
    </div>)}
</div>
        </div>
    );
};

export default Mainnews;