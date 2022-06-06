import {configureStore} from  '@reduxjs/toolkit'

import newsReducer from './news'
import searchFiltersReducer from './serachFilters'


export const store = configureStore({
    reducer:{

        nes:newsReducer,
        searchFilters:searchFiltersReducer

    }
})

