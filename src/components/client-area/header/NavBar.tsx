import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import CloseSearchIcon from '@mui/icons-material/HighlightOff';
import Search from './Search'
import {useSelector  , useDispatch} from 'react-redux'
import {changeSearchInputOpenStatus} from '../../../store/serachFilters'

interface ClientNavBarProps {
    
}
 
const ClientNavBar: React.FC<ClientNavBarProps> = () => {
   
  const dispatch = useDispatch()
  const searchFiltersSearchStatus = useSelector((state:any)=>state.searchFilters.searchInput)

  function changeOpenSearchOfInputStatus(){
    dispatch(changeSearchInputOpenStatus())
  }


    return (
      <>
        <nav className="flex justify-around my-2">
          <Link
            to="/"
            className="logo-container flex justify-center items-center gap-1 "
          >
            <div className="logo-img-container">
              <img src="./logosite.png" alt="site logo" className="w-9" />
            </div>
            <div className="app-logo-text-container">Ninja news</div>
          </Link>
          <div className="link-container"></div>
          <div className="search-container">
            <div className="search-links-container flex items-center justify-center gap-4 font-semibold">
              <div className="serach-input-container">
                {searchFiltersSearchStatus && <Search />}
              </div>
              <div className="search text-blue-900 hover:text-blue-600 transition-all ease cursor-pointer">
                    {!searchFiltersSearchStatus &&<SearchIcon fontSize='small' onClick={changeOpenSearchOfInputStatus}/>}
              {searchFiltersSearchStatus && <CloseSearchIcon fontSize='small' onClick={changeOpenSearchOfInputStatus} />}
              </div>

            
            </div>
          </div>
        </nav>
      </>
    );
}
 
export default ClientNavBar;