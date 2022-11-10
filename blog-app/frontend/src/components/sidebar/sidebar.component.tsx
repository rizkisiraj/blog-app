import data from '../../dummyData.json';
import ArticleContent from '../../utils/interfaces/articleContent.interface';
import Categories from '../categories/categories';
import PopularCard from '../popular-card/popular-card.component';

const CategoriesMap = ["Technology"]

const Sidebar:React.FC = () => {
  const articles:ArticleContent[] = data.data;

  return (
    <aside className="hidden lg:block w-2/5">
      <section>
      <div className="w-full bg-emerald-500 p-2 text-white text-center min-h-[44px] rounded-md mb-4">
        <h2 className="text-sm md:text-xl font-bold">Paling Populer</h2>
      </div>
      <div>
        {
          articles.map(article => (
            <PopularCard article={article} key={article._id} />
          ))
        }
      </div>
      </section>
      <section>
      <div className="w-full bg-emerald-500 p-2 text-white text-center min-h-[44px] rounded-md mb-4">
        <h2 className="text-sm md:text-xl font-bold">Kategori</h2>
      </div>
      <div>
        {
          CategoriesMap.map(category => (
            <Categories categories={category} key={category} />
          ))
        }
      </div>
      </section>
    </aside>
  )
} 

export default Sidebar;