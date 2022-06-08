
import SearchIcon from '@mui/icons-material/Search';
import CloseSearchIcon from '@mui/icons-material/HighlightOff';
import ChangeDatePicker from './DatePicker'
import SearchNews from './SearchNews'
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
        <nav className="flex justify-around my-2  border-b pb-4">
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
              <div className="serach-input-container z-50">
              <SearchNews visible={searchFiltersSearchStatus}/> 
                {/* // made it this way because i don't have full controll over mui styles */}
              </div>
              
              <div className=" flex  items-center justify-between text-center search text-blue-900 hover:text-blue-600 transition-all ease cursor-pointer outline-none">
              
                    {!searchFiltersSearchStatus &&<SearchIcon fontSize='small' onClick={changeOpenSearchOfInputStatus}/>}
                    {searchFiltersSearchStatus && <CloseSearchIcon className="hover:text-red-400" fontSize='small' onClick={changeOpenSearchOfInputStatus} />}
                    {!searchFiltersSearchStatus && <ChangeDatePicker invisible={true}/>}
                    {searchFiltersSearchStatus && <ChangeDatePicker invisible={false}/>}
              </div>

            
            </div>
          </div>
        </nav>
      </>
    );
}
 
export default ClientNavBar;