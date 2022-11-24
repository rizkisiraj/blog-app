import React from "react";
import ArticleContent from "../../utils/interfaces/articleContent.interface";
import { Link } from 'react-router-dom';
import convertDate from "../../utils/functions/convertDate";

interface Props {
    article:ArticleContent;
}

const ArticleCard:React.FC<Props> = ({article}:Props) => {
    console.log(article);
    const {category, createdAt, cover, text, title, writer,_id} = article;
    
    return (
      <div className="overflow-hidden rounded-lg shadow-md">
        <img className="w-full h-52 rounded-lg" src={cover} alt="article-pict" />
        <article className="px-3 py-2">
          <div>
            <div className="flex justify-between">
            <span className="text-sm text-emerald-500 capitalize">{category}</span>
            <p className="text-sm">{convertDate(createdAt)}</p>
            </div>
            <div>
              <Link to={`/${category}/${_id}`}>
              <h3 className="text-xl font-bold">{title}</h3>
              </Link>
              <p className="text-sm"><span className="font-bold">By</span> {writer}</p>
            </div>
          </div>
          <div className="text-ellipsis--3 w-full my-2">
            <p className="text-sm">{text}</p>
          </div>
        </article>
      </div>
    )
}

export default ArticleCard;