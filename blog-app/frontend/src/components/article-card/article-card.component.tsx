import React from "react";
import ArticleContent from "../../utils/interfaces/articleContent.interface";
import { Link } from 'react-router-dom';

interface Props {
    article:ArticleContent;
}

const ArticleCard:React.FC<Props> = ({article}:Props) => {
    const {category, date, image, text, title, writer,id} = article;
    
    return (
      <div className="overflow-hidden rounded-lg shadow-md">
        <img className="w-full h-52 rounded-lg" src={image} alt="article-pict" />
        <article className="px-3 py-2">
          <div>
            <span className="text-sm text-emerald-500 capitalize">{category}</span>
            <div>
              <Link to={`${category}/${id}`}>
              <h3 className="text-xl font-bold">{title}</h3>
              </Link>
              <p className="text-sm"><span className="font-bold">By</span> {writer}</p>
            </div>
          </div>
          <div className="text-ellipsis--3 w-full my-2">
            <p className="text-sm">{text}</p>
          </div>
          <div>
            <p className="text-sm">{date}</p>
          </div>
        </article>
      </div>
    )
}

export default ArticleCard;