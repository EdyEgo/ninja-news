import CardsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/Reorder';
import {useDispatch,useSelector} from 'react-redux'
import {changeNewsViewMode} from '../../../store/serachFilters'

interface ChangeNewsDisplayProps {
    
}
 
const ChangeNewsDisplay: React.FC<ChangeNewsDisplayProps> = () => {

   const dispatch = useDispatch()
   const newsViewModeCards = useSelector((state:any)=>state.searchFilters.newsViewCardMode)
 
  const selectedClass = "bg-gray-200 rounded-md pointer-events-none"
  const unselectedClass = "cursor-pointer"

   function changeView(){
       dispatch(changeNewsViewMode())
   }

    return ( 
    <div className="change-news-display border-2 rounded-md p-1">
       
         {newsViewModeCards === true && 
         <>
            <CardsIcon className={selectedClass}/>
            <ListIcon onClick={changeView} className={unselectedClass}/>
         </>
         }
         
         {newsViewModeCards ===false &&
            <>
               <CardsIcon onClick={changeView} className={unselectedClass}/>
               <ListIcon className={selectedClass}/>
            </>
         }
    </div> 
    );
}
 
export default ChangeNewsDisplay;