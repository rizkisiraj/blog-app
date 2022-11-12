import { useSelector } from "react-redux";
import postSelector from "../../stores/posts/post.selector";
import ArticleContent from "../../utils/interfaces/articleContent.interface";

const Jumbotron:React.FC = () => {
  const article:ArticleContent = useSelector(postSelector).posts[0];
  console.log(article)
    return article && (
        <div className="w-full h-48 bg-blue-500 rounded-xl overflow-hidden relative font-sans md:h-80">
          <div className="bg-gray-rgba h-full w-full absolute z-10 top-0 left-0 p-4 flex flex-col justify-end">
            <h3 className="font-bold text-xl">{article.title}</h3>
            <p className="text-sm"><span className="font-bold">By</span> {article.writer}</p>
          </div>
          <img className="h-full w-full absolute top-0 left-0" src={article.cover} alt="article pict" />
          
        </div>
        
    )
}

export default Jumbotron;