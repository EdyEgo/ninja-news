import {useEffect,useState , useCallback} from 'react'
import {getHeadLines,getSearchedNews} from '../../api/newsApiSauceGetters'
import {useSelector,useDispatch} from 'react-redux'
import {addNews} from '../../store/news'

import NewsContainer from './content/NewsContainer'
import {getHeadlinesFromLocalStorage} from '../../composables/getHeadlinesLocalStorage'
import Pagination from './footer/pagination'

interface ClientHomeProps {}

const ClientHome: React.FC<ClientHomeProps> = () => { 
 
  const dispatch = useDispatch()


 const sortbyNewestSelected = useSelector((state:any)=>state.searchFilters.sortByNewest)
 const searchInputValue = useSelector((state:any)=>state.searchFilters.searchInputValue)
 const selectedDate = useSelector((state:any)=>state.searchFilters.selectedDate)
 const searchTimes = useSelector((state:any)=>state.searchFilters.searchTimes)// this one is here for the useEffect to trigger on change




 const [errorMsg,setErrorMsg] = useState<null | string>(null)

  useEffect(()=>{
    let isSubscribed = true;

      async function getNews(){ 

    // so we don t call the headlines if the user enter multiple time in the same day
    const localStoreHeadlines = getHeadlinesFromLocalStorage()
      if(localStoreHeadlines !== null ){
          dispatch(addNews({totalResults:localStoreHeadlines.totalResults,articles:localStoreHeadlines.articles,sortByNewest:sortbyNewestSelected}))
      
          console.log('got news from the localStorage',localStoreHeadlines)
          return 
      }
      const news:any = await getHeadLines()
    
      if(news?.errorMessage || news?.ok === false || news?.problem !== null){
        setErrorMsg('Could not load your news , try again later!')
        return 
      }
      console.log('got news from the api',news,sortbyNewestSelected)
       dispatch(addNews({totalResults:news.data.totalResults,articles:news.data.articles,sortByNewest:sortbyNewestSelected}))// add headlines
     
      }

      async function getSearchedArticles(){
        
        const news:any = await getSearchedNews({inputValue:searchInputValue,fromSelectedDate:selectedDate})

        if(news?.errorMessage || news?.ok === false || news?.problem !== null){
          setErrorMsg('Could not load your news , try again later!')
          return 
        }

        console.log('got serached news',news)
        dispatch(addNews({doNotStore:true,totalResults:news.data.totalResults,articles:news.data.articles,sortByNewest:sortbyNewestSelected}))
      }

    if(isSubscribed && searchInputValue === "" ){
         getNews()
    }

    if(isSubscribed && searchInputValue !== ""){
      getSearchedArticles()
    }

    return () => { //clean up
      isSubscribed = false;
    };
  },[sortbyNewestSelected,searchTimes])

  return (
    <>
      <div className="hero-container flex justify-center  mt-10 w-full" >
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