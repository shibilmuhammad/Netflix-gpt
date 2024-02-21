import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name:'movies',
        initialState:{
            nowPlayingMovies:null,
            movieTrailer:null
        },
        reducers:{
            
            addNowPlayingMovies : (state,action)=>{
                state.nowPlayingMovies = action.payload;
            },addTrailer :(state,action)=>{
                state.movieTrailer = action.payload
            },addPopularMovies :(state,action)=>{
                state.popularMovies = action.payload
            }
        }
    }
)
export const {addNowPlayingMovies,addTrailer ,addPopularMovies} = moviesSlice.actions
export default moviesSlice.reducer;