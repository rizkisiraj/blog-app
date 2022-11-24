import convertDate from "../../utils/functions/convertDate";
import ArticleContent from "../../utils/interfaces/articleContent.interface";
import { Link } from 'react-router-dom';

interface Props {
    article: ArticleContent
}

const PopularCard:React.FC<Props> = ({ article }:Props) => {
  
  const { cover,title,createdAt,category,_id } = article;
  
  return (
    <article className="w-full h-24 flex p-3 rounded-md shadow-xl mb-3 gap-2 bg-white text-black">
        <img className="block basis-2/5 w-full object-cover rounded-lg" src={cover} alt="article pict" />
        <div>
        <Link to={`/${category}/${_id}`}><h3 className="text-sm font-bold capitalize">{title}</h3></Link>
          <p className="text-xs">{convertDate(createdAt)}</p>    
        </div>
    </article>
  )
}

export default PopularCard;