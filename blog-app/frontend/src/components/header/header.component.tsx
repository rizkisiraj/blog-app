import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

const Header:React.FC = () => {
  


  return (
      <header className="w-full h-16 p-4 xl:px-40 font-sans flex justify-between items-center bg-emerald-500 absolute top-0">
        <div>
          <h1 className="font-bold text-lg text-white">Blog App</h1>
        </div>
        <div className="lg:hidden">
          <div className="bg-white w-11 h-1 mb-2"></div>
          <div className="bg-white w-11 h-1 mb-2"></div>
          <div className="bg-white w-11 h-1"></div>
        </div>
        <nav className="hidden lg:block text-white">
          <ul className='flex items-center gap-4'>
            <li><Link to={"/"}>Beranda</Link></li>
            <li><Link to={"/write"}>Tulis</Link></li>
            <li><button className='min-h-[44px] min-w-[44px]' aria-label='search-button'><FaSearch className='text-xl m-auto' /></button></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;