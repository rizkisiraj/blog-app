import { Link } from 'react-router-dom'

interface Props {
  categories:any
}


const Categories:React.FC<Props> = ({ categories }:Props) => (
    <div className="w-full flex justify-between">
        <Link to={`/${categories.name}`}>{categories.name}</Link>
        <span>({categories.quantity})</span>
    </div>
)

export default Categories;