import Switch from '../helpers/switchFilter'
import {useSelector,useDispatch} from 'react-redux'
import {changeSortByNewest} from '../../../store/serachFilters'

interface ChangeDateSortFilterProps {
    
}
 
const ChangeDateSortFilter: React.FC<ChangeDateSortFilterProps> = () => {
    
    const dispatch = useDispatch()
    const sortByNewest = useSelector((state:any)=>state.searchFilters.sortByNewest)
    
    function changeSortByStatus(){
        dispatch(changeSortByNewest())
    }

    return (  
        <Switch checked={sortByNewest} setChecked={changeSortByStatus}/>
    );
}
 
export default ChangeDateSortFilter;