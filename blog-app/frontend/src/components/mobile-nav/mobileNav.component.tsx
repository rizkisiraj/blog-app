import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import postSelector from "../../stores/posts/post.selector";
import ArticleContent from "../../utils/interfaces/articleContent.interface";
import PopularCard from "../popular-card/popular-card.component";

interface Props {
  nav:boolean;
  setNav:() => void
}

const MobileNav:React.FC<Props> = ({ nav, setNav }:Props) => {
const articles:ArticleContent[] = useSelector(postSelector).posts;

  return (
    <nav className={`w-full absolute h-navHeight bg-emerald-500 top-16 lg:hidden text-white left-0 ${nav? 'hidden' : ''} z-[999] p-4`}>
      <NavLink to='/' className='text-4xl font-bold block mb-6' onClick={setNav}>Beranda</NavLink>
      <NavLink to='/Write' className='text-4xl font-bold block mb-20' onClick={setNav}>Tulis</NavLink>
      <div>
        <h3 className="text-4xl font-bold mb-8">Paling Populer</h3>
        <div>{ articles.map(article => 
          <PopularCard article={article} key={article._id} />)
        }
        </div>
      </div>
    </nav>
  )
}

export default MobileNav;