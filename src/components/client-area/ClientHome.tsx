import {useEffect,useState} from 'react'
import {getHeadLines} from '../../api/newsApiSauceGetters'
import {useSelector,useDispatch} from 'react-redux'
import {addNews} from '../../store/news'
import NewsContainer from './content/NewsContainer'
import {getHeadlinesFromLocalStorage} from '../../composables/getHeadlinesLocalStorage'

interface ClientHomeProps {}

const ClientHome: React.FC<ClientHomeProps> = () => { 
 
  const dispatch = useDispatch()

 const news  = useSelector((state:any)=>state.news.articles)

 const [errorMsg,setErrorMsg] = useState<null | string>(null)

  useEffect(()=>{
    let isSubscribed = true;

   async function getNews(){ 

    // so we don t call the headlines if the user enter multiple time in the same day
    const localStoreHeadlines = getHeadlinesFromLocalStorage()
      if(localStoreHeadlines !== null){
          dispatch(addNews({totalResults:localStoreHeadlines.totalResults,articles:localStoreHeadlines.articles}))
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

    if(isSubscribed && news?.length < 1){
         getNews()

      
     
      

    }

    return () => { //clean up
      isSubscribed = false;
    };
  },[])

  return (
    <>
      <div className="hero-container flex justify-center  mt-20">
          {errorMsg !== null && <h1>{errorMsg}</h1>}
          {errorMsg === null && <NewsContainer/>}
      </div>
    </>
  );
};

export default ClientHome;
// if there is no loaded content , don t show the pagination tabs