import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleLoader from "../../components/article-loader/article-loader.component";
import ArticleSection from "../../components/article-section/article-section.component";
import Sidebar from "../../components/sidebar/sidebar.component";

const ArticlePage:React.FC = () => {
  const { articleId } = useParams();
  const [article, setArticle]:any = useState({});
  const [loader, setLoader] = useState<boolean>(true);
  
  
  useEffect(() => {
    const fetchArticle = async (articleId:string | undefined) => {
      axios.get(`http://localhost:5000/api/posts/${articleId}`)
      .then(({data}) => {
        setArticle(data)
        setLoader(false)
      });
    }

    fetchArticle(articleId)
  },[articleId])

  return (
    <>
    <section className="w-full mt-16 p-4 xl:px-40 font-sans lg:flex gap-4">
      {
        loader ? <ArticleLoader /> : <ArticleSection article={article} />
      }
      <Sidebar />
    </section>
    </>
  )
}

export default ArticlePage;