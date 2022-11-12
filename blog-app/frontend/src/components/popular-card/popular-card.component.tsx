import convertDate from "../../utils/functions/convertDate";
import ArticleContent from "../../utils/interfaces/articleContent.interface";

interface Props {
    article: ArticleContent
}

const PopularCard:React.FC<Props> = ({ article }:Props) => {
  
  const { cover,title,createdAt } = article;
  
  return (
    <article className="w-full h-24 flex p-3 rounded-md shadow-xl mb-3 gap-2">
      <img className="block basis-2/5 w-full object-cover rounded-lg" src={cover} alt="article pict" />
      <div>
        <h3 className="text-sm font-bold capitalize">{title}</h3>
        <p className="text-xs">{convertDate(createdAt)}</p>    
      </div>
    </article>
  )
}

export default PopularCard;