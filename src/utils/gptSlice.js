import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name:'gpt',
        initialState:{
            showgptSearch:false,
            movieName:null,
            searchMovies:null
        },
        reducers:{
            toggleSearchView:(state)=>{
                state.showgptSearch = !state.showgptSearch
            },
            addMovies:(state,action)=>{
                const {movieName,searchMovies} = action.payload
                state.movieName = movieName
                state.searchMovies = searchMovies
            }
        }
    }
)
export const {toggleSearchView,addMovies} = gptSlice.actions
export default gptSlice.reducer;
