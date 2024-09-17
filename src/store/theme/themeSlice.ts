import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
    dark:boolean
}
const initialState: ThemeState = {
   dark:false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        change(state) {
            state.dark=state.dark?false:true;
        },
      
    }
});

export const { change} = themeSlice.actions;

export default themeSlice.reducer;