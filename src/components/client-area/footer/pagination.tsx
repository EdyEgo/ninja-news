import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch,useSelector} from 'react-redux'
import {changeMaxItemsPerPage,changeLastLoadedItemIndex} from '../../../store/serachFilters'

export default function TablePaginationDemo() {

    const dispatch = useDispatch()
  const [page, setPage] = React.useState(0);
 

  const articles =  useSelector((state:any)=>state.news.articles) // countPages


  const [rowsPerPage, setRowsPerPage] = React.useState(10);


//   const totalPages = articles.length / rowsPerPage
 

  function calculateStartAndFinishAt(newPage:number,rowsPerPageCustom?:number){
 
    const startIndex = rowsPerPageCustom ?rowsPerPageCustom * newPage + 1  : rowsPerPage * newPage + 1 
    const finishIndex = startIndex + (rowsPerPage - 1)
   return {startIndex,finishIndex}

  }

  function changeRowsPerPage(formatPage:number){
        setRowsPerPage(formatPage);
      dispatch(changeMaxItemsPerPage(formatPage))
      // reset page 

      setPage(0);

  }


  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    

    const {finishIndex,startIndex} = calculateStartAndFinishAt(newPage)
    dispatch(changeLastLoadedItemIndex({finishIndex,startIndex}))
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
  const formatPage = parseInt(event.target.value, 10)

       changeRowsPerPage(formatPage)

     
     
       dispatch(changeLastLoadedItemIndex({finishIndex:formatPage,startIndex:0}))
  };

  return (
    <TablePagination
      component="div"
      count={articles.length}
      page={page}
      
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}