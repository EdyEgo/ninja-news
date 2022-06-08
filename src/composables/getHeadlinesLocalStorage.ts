import moment from "moment"

export function getHeadlinesFromLocalStorage(){
     const getLocalStorage = localStorage.getItem('headlines')
     if(getLocalStorage === null) return null
     const parseLocalStorage = JSON.parse(getLocalStorage)
    
     const nowDate = moment(new Date()).format('YYYY/MM/DD');
     if(nowDate !== parseLocalStorage.date) return null // if the headlines are from another date
     return parseLocalStorage
}