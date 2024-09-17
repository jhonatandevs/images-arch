'use client'
import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavoritePhotos } from "./photos/photoSlice";

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-photos') ?? '{}');
    store.dispatch(setFavoritePhotos(favorites));
  }, [])
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
