import {
    createSlice
} from '@reduxjs/toolkit';

import {
    ICharacter,
    IFavorites,
    IFavoriteState
} from '../../../types/character';

const initialState = {
    favorite: []
}

const CardData = createSlice({
    name: 'cardData',
    initialState,
    reducers: {
        addFavorites: (state: IFavorites, action) => {
            state.favorite = [...state.favorite, action.payload]
        },
        removeFavorites: (state: IFavorites, action) => {
            state.favorite = state.favorite.filter(item => item !== action.payload);
        }
    }
});

export const { addFavorites, removeFavorites } = CardData.actions;

export const cardStateData = (state: IFavoriteState) => state.favorite.favorite;

export default CardData.reducer;