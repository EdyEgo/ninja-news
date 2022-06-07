import {useEffect,useState} from 'react'
import {getHeadLines} from '../../api/newsApiSauceGetters'
import {useSelector,useDispatch} from 'react-redux'
import {addNews} from '../../store/news'

import NewsContainer from './content/NewsContainer'
import {getHeadlinesFromLocalStorage} from '../../composables/getHeadlinesLocalStorage'
import Pagination from './footer/pagination'

interface ClientHomeProps {}

const ClientHome: React.FC<ClientHomeProps> = () => { 
 
  const dispatch = useDispatch()


 const sortbyNewest = useSelector((state:any)=>state.searchFilters.sortByNewest)

 const [errorMsg,setErrorMsg] = useState<null | string>(null)

  useEffect(()=>{
    let isSubscribed = true;

   async function getNews(){ 

    // so we don t call the headlines if the user enter multiple time in the same day
    const localStoreHeadlines = getHeadlinesFromLocalStorage()
      if(localStoreHeadlines !== null ){
          dispatch(addNews({totalResults:localStoreHeadlines.totalResults,articles:localStoreHeadlines.articles,sortbyNewest:sortbyNewest}))
      
          console.log('got news from the localStorage',localStoreHeadlines)
          return 
      }
      const news:any = await getHeadLines()
    
      if(news?.errorMessage || news?.ok === false || news?.problem !== null){
        setErrorMsg('Could not load your news , try again later!')
        return 
      }
      console.log('got news from the api',news)
       dispatch(addNews({totalResults:news.data.totalResults,articles:news.data.articles}))// add headlines
     
      }

    if(isSubscribed ){
         getNews()

      
     
      

    }

    return () => { //clean up
      isSubscribed = false;
    };
  },[sortbyNewest])

  return (
    <>
      <div className="hero-container flex justify-center  mt-10 w-full" onScroll={(event)=>console.log('my scroll event is',event)}>
          {errorMsg !== null && <h1>{errorMsg}</h1>}
          {errorMsg === null && <NewsContainer/>}
      </div>
      <div className="pagination flex justify-center">
           <Pagination/>
      </div>
    </>
  );
};

export default ClientHome;
// if there is no loaded content , don t show the pagination tabs