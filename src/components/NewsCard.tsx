import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface INews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const NewsCard = ({news} : {news:INews}) => {
    
    
    return (
        <div>
            <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                height={300}
                width={3250}
                  src={news.imageUrl}
                  alt={news.imageAlt} />
                </figure>
                <p className=' font-bold'>{news.category}</p>
                <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
                
              </div>
            </div>
            </Link>
        </div>
    );
};

export default NewsCard;