import SearchHelper from '../helpers/Search'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {changeSearchInputValue} from '../../../store/serachFilters'
import {useSelector} from 'react-redux'


interface SearchNewsProps {
    visible:boolean
}
 
const SearchNews: React.FC<SearchNewsProps> = ({visible}) => {
    const navigate = useNavigate()   
    const dispatch = useDispatch()
 
    const serachInputValue  = useSelector((state:any)=>state.searchFilters.searchInputValue)

    function redirectUserToSearchedTopic(){
        const trimedLowerCaseInputValue = serachInputValue.toLowerCase().trim()
        dispatch(changeSearchInputValue(trimedLowerCaseInputValue))// add input value to the store
        // navigate(`/search?query=${trimedLowerCaseInputValue}`) 
        navigate('/search') // redirect the user 
    }

    function setSerachInputValueInStore(inputValue:string){
        const trimedLowerCaseInputValue = inputValue.toLowerCase().trim()
        dispatch(changeSearchInputValue(trimedLowerCaseInputValue))
    }

    return ( <>
    
    <SearchHelper visible={visible}  redirectOnClick={redirectUserToSearchedTopic} setSearchInputValue={setSerachInputValueInStore}/>
    </> );
}
 
export default SearchNews;