
import SearchIcon from '@mui/icons-material/Search';
import CloseSearchIcon from '@mui/icons-material/HighlightOff';
import Search from './Search'
import {useSelector  , useDispatch} from 'react-redux'
import {changeSearchInputOpenStatus} from '../../../store/serachFilters'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import DropDown from './dropDownFilters'
import {useRef,useState} from 'react'

interface ClientNavBarProps {
    
}
 
const ClientNavBar: React.FC<ClientNavBarProps> = () => {
   
  const dispatch = useDispatch()
  const newIconRef = useRef(null)
  const [openDropDown,setOpenDropDow] = useState(false)
  const searchFiltersSearchStatus = useSelector((state:any)=>state.searchFilters.searchInput)

  function changeOpenSearchOfInputStatus(){
    dispatch(changeSearchInputOpenStatus())
  }
 
  

    return (
      <>
        <nav className="flex justify-around my-2">
          <div
           
            className="logo-container flex justify-center items-center gap-2 "
          >
            <div className="logo-img-container cursor-pointer text-blue-900 hover:text-blue-600 transition-all ease">
              {/* <img src="./logosite.png" alt="site logo" className="w-9" /> */}
               <LineStyleIcon ref={newIconRef} onClick={()=>{setOpenDropDow(!openDropDown)}}/>
            </div>
            <div className="app-logo-text-container">Ninja news</div>
          </div>
          <DropDown open={openDropDown} anchorRef={newIconRef} setOpen={setOpenDropDow} />
          <div className="link-container"></div>
          <div className="search-container">
            <div className="search-links-container flex items-center justify-center gap-1 font-semibold">
              <div className="serach-input-container ">
              <Search visible={searchFiltersSearchStatus}/> 
                {/* // made it this wasy bec. i don't have full controll over mui styles */}
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