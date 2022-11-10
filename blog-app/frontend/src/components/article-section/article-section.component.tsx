import ArticleContent from '../../utils/interfaces/articleContent.interface';
import MarkdownPreview from '@uiw/react-markdown-preview'
import convertDate from '../../utils/functions/convertDate';

interface Props {
  article:ArticleContent
}

const ArticleSection:React.FC<Props> = ({article}:Props) => {
   const { category, createdAt, _id, cover, text, title, writer } = article;

    return (
      <section className="w-full">
        <div className="w-full bg-emerald-500 p-2 text-white min-h-[44px] rounded-md mb-4">
          <span className="text-sm">{`home > ${category} > ${title}`}</span>
        </div>
        <div className="w-full mb-4">
        <div className='w-full mb-4 overflow-hidden rounded-lg'>
          <img src={cover} alt="cover" className='w-full' />
        </div>
          <h2 className="font-bold text-3xl capitalize mb-2">{title}</h2>
          <div className="flex">
            <span className="block mr-4">{`By ${writer}`}</span>
            <span className="block">{convertDate(createdAt)}</span>
          </div>
        </div>
        <MarkdownPreview source={text} />
      </section>
    )
}

export default ArticleSection;