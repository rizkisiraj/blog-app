import ArticleContent from "../../utils/interfaces/articleContent.interface";

interface Props {
    article: ArticleContent
}

const PopularCard:React.FC<Props> = ({ article }:Props) => {
  
  const { image,title,date } = article;
  
  return (
    <article className="w-full h-20 flex p-3 rounded-md shadow-xl mb-3 gap-2">
      <img className="block basis-2/5 w-full object-cover rounded-lg" src={image} alt="article pict" />
      <div>
        <h3 className="text-sm font-bold capitalize">{title}</h3>
        <p className="text-xs">{date}</p>    
      </div>
    </article>
  )
}

export default PopularCard;