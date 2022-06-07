import {useSelector} from 'react-redux'
import CardsViewMode from './cardsViewMode'
import ListViewMode from './listViewMode'

interface NewsContainerProps {
    
}
 
const NewsContainer: React.FC<NewsContainerProps> = () => {
    const viewCardMode = useSelector((state:any)=>state.searchFilters.newsViewCardMode)
    return ( 
        <div className="news-container mt-20">
             {viewCardMode && <CardsViewMode/>}
             {!viewCardMode && <ListViewMode/>}
        </div>
     );
}
 
export default NewsContainer;