import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './theme/themeSlice'
import photosReducer from './photos/photoSlice'
import themeReducer from './theme/themeSlice'
import {localStorageMiddleware} from '../store/middlewares/localstorage--middleware'
import { useDispatch, useSelector } from 'react-redux'
// ...

export const store = configureStore({
    reducer: {
        //Le ponemos count, pero apunta a CounterReducer
        photos: photosReducer,
        theme:themeReducer
      
    },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();