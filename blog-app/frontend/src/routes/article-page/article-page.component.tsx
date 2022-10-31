import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleSection from "../../components/article-section/article-section.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import data from '../../dummyData.json'
import ArticleContent from "../../utils/interfaces/articleContent.interface";

const ArticlePage:React.FC = () => {
  const { articleId } = useParams();
  const [article, setArticle]:any = useState({});
  
  
  useEffect(() => {
    const articleToRead = data.data.find(article => {
      return article.id === articleId;
    })

    setArticle(articleToRead);
  },[articleId])

  return (
    <>
    <section className="w-full mt-16 p-4 xl:px-40 font-sans lg:flex gap-4">
      <ArticleSection article={article} />
      <Sidebar />
    </section>
    </>
  )
}

export default ArticlePage;