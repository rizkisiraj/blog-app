interface Props {
  categories:any
}


const Categories:React.FC<Props> = ({ categories }:Props) => (
    <div className="w-full flex justify-between">
        <p>{categories.name}</p>
        <span>({categories.quantity})</span>
    </div>
)

export default Categories;