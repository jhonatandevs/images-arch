import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";


export const localStorageMiddleware =(state:MiddlewareAPI)=>{
    return(next: Dispatch)=>(action: Action)=>{
        next(action)
        console.log("INTERCEPTOR...",state.getState())
        console.log("INTERCEPTOR...",action);
        if(action.type ==='photos/toggleFavorite'){
            // const {counter,pokemons} = state.getState() as RootState;
            // localStorage.setItem('favorite-pokemons',JSON.stringify(pokemons.favorites))
        }
    }
}