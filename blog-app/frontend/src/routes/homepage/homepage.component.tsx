import ArticleCard from "../../components/article-card/article-card.component";
import Jumbotron from "../../components/jumbotron/jumbotron.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import data from "../../dummyData.json"
import ArticleContent from "../../utils/interfaces/articleContent.interface";

const Homepage:React.FC = () => {
    const articleContents:ArticleContent[] = data.data;

    return (
        <>
          <section className='w-full mt-16 p-4 xl:px-40 font-sans lg:flex gap-4'>
            <section className="w-full ">
            <Jumbotron />
            <main className="w-full mt-4 min-h-screen">
              <div className="w-full bg-emerald-500 p-2 flex justify-between text-white items-center min-h-[44px] rounded-md mb-4">
                <h2 className="text-sm md:text-xl font-bold">Postingan Terbaru</h2>
                <a href="#" rel="noreferrer" className="capitalize text-xs underline md:text-sm">lebih banyak</a>
              </div>
              <div className="w-full grid-cols-1 auto-rows-cardHeight grid gap-2 md:grid-cols-2">
                {
                  articleContents.map(articleContent => <ArticleCard article={articleContent} key={articleContent.id} />)
                }
              </div>
            </main>
            </section>
            <Sidebar />
          </section>
        </>
    )
}

export default Homepage;