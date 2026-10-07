import Mainnews from '@/components/Mainnews';

import MostRead from '@/components/MostRead';
import NewsCard from '@/components/NewsCard';


interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  }[];
}
  


const page = async() => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  // console.log(data)
  const sections = data.data
  // console.log(sections)
  const MainNews = sections[0].articles

  const otherSections : IOtherSection[] = sections.slice(1)

  // console.log(otherSections)


  return (
    
    <div>
      
      <div className='grid grid-cols-3 container mx-auto'>
        <div className='col-span-2 '>
          <Mainnews  news={MainNews}/>


         <div className='grid gap-5 mt-5'>
           {otherSections.map(os => <div className=' py-2' key={os.curationId}>
            <h1 className='font-bold border-red-700 border-b-2 pb-2'>{os.title}</h1>

           <div className='grid grid-cols-3 gap-5 mt-5'>
             {os.articles.map( news =>  <NewsCard key={news.id} news={news} />  )}   
            </div>

          </div>)}
         </div>
        </div>

        <div className='col-span-1 gap-5 p-4 bg-gray-100'>
          <MostRead />
        </div>
       
      </div>

    </div>
  );
};

export default page;