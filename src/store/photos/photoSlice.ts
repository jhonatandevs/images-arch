
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo } from '../../lib/domain/Photo';

interface PhotosState{
  favorites: { [key: string]: Photo },
}
const initialState:PhotosState = {
  favorites: {},
}

const PhotoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setFavoritePhotos( state, action: PayloadAction<{ [key: string]: Photo }> ) {
      state.favorites = action.payload;
    },

    toggleFavorite( state, action: PayloadAction<Photo> ) {

      const photo = action.payload;
      const { id } = photo;

      if ( !!state.favorites[id] ) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = photo;
      }

      //TODO: No se debe de hacer en Redux
      localStorage.setItem('favorite-photos', JSON.stringify( state.favorites ) );

    }

  }
});

export const {setFavoritePhotos,toggleFavorite} = PhotoSlice.actions

export default PhotoSlice.reducer