import {
    configureStore
} from '@reduxjs/toolkit';

import cardData from './modules/favorites/reducer';

const store =  configureStore({
    reducer:  {
        favorite: cardData
    }
}); 

export default store;