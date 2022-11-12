import ArticleContent from '../../utils/interfaces/articleContent.interface';
import Categories from '../categories/categories';
import PopularCard from '../popular-card/popular-card.component';
import { useSelector } from 'react-redux';
import postSelector from '../../stores/posts/post.selector';
import categoriesSelector from '../../stores/categories/categories.selector';

interface CategoriesContent {
  _id:string,
  name:string,
  quantity:number,
}

const Sidebar:React.FC = () => {
  const articles:ArticleContent[] = useSelector(postSelector).posts;
  const categories:CategoriesContent[] = useSelector(categoriesSelector).categories;
  console.log(categories)

  return (
    <aside className="hidden lg:block w-2/5">
      <section>
      <div className="w-full bg-emerald-500 p-2 text-white text-center min-h-[44px] rounded-md mb-4">
        <h2 className="text-sm md:text-xl font-bold">Paling Populer</h2>
      </div>
      <div>
        { articles &&
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
          categories && categories.map(category => (
            <Categories categories={{...category}} key={category._id} />
          ))
        }
      </div>
      </section>
    </aside>
  )
} 

export default Sidebar;