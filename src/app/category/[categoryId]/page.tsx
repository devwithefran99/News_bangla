import NewsCard from '@/components/NewsCard';
import React from 'react';
interface INews {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
}

const CategoryNews = async ({params} : {params:{categoryId : string}}) => {
    const {categoryId} = await params;
    
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews : INews[] = data.data ?? [];
    
    return (
        <div className='container mx-auto p-4'>
            <h1 className='font-bold text-red-700 text-2xl border-b-2 border-red-700 mb-5 p-4'>{data.title}</h1>

            <div className='grid grid-cols-3 gap-5'>
                {categoryNews.map(news => <NewsCard key={news.id} news={news} />)}
            </div>
        </div>
    );
};

export default CategoryNews;