import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../dummyData.json'
import ArticleContent from '../../utils/interfaces/articleContent.interface';
import ArticleCard from '../../components/article-card/article-card.component';
import Sidebar from '../../components/sidebar/sidebar.component';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [articles, setArticles] = useState<ArticleContent[]>([]);

  useEffect(() => {
    const newArticle = data.data.filter(article => article.category === categoryId);

    setArticles(newArticle);
  },[categoryId])

  return (
    <section className='w-full mt-16 p-4 xl:px-40 font-sans lg:flex gap-4'>
      <main className="w-full min-h-screen">
          <div className="w-full bg-emerald-500 p-2 flex justify-between text-white items-center min-h-[44px] rounded-md mb-4">
            <span className="text-sm">{`home > ${categoryId}`}</span>
          </div>
          <div className="w-full grid-cols-1 auto-rows-cardHeight grid gap-2 md:grid-cols-2">
            {
              articles.map(article => <ArticleCard article={article} key={article.id} />)
            }
          </div>
      </main>
      <Sidebar />
    </section>
  )
}

export default CategoryPage;