import ArticleContent from '../../utils/interfaces/articleContent.interface';
import MarkdownPreview from '@uiw/react-markdown-preview'

interface Props {
  article:ArticleContent
}

const ArticleSection:React.FC<Props> = ({article}:Props) => {
   const { category, date, id, image, text, title, writer } = article;

    return (
      <section className="w-full">
        <div className="w-full bg-emerald-500 p-2 text-white min-h-[44px] rounded-md mb-4">
          <span className="text-sm">{`home > ${category} > ${title}`}</span>
        </div>
        <div className="w-full mb-4">
          <h2 className="font-bold text-3xl capitalize mb-2">{title}</h2>
          <div className="flex">
            <span className="block mr-4">{`By ${writer}`}</span>
            <span className="block">{date}</span>
          </div>
        </div>
        <MarkdownPreview source={text} />
      </section>
    )
}

export default ArticleSection;