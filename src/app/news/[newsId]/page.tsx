import Image from 'next/image';
import React from 'react';

interface INews {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
}

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {

    const { newsId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    const news: INews = data;
    console.log(news);
    

    return (
        <div className='container mx-auto p-4'>
           <h1>{news.title}</h1>
        </div>
    );
};

export default NewsDetails;