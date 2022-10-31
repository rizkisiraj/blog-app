interface Props {
  categories:String
}


const Categories:React.FC<Props> = ({ categories }:Props) => (
    <div className="w-full flex justify-between">
        <p>{categories}</p>
        <span>(0)</span>
    </div>
)

export default Categories;