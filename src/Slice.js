import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "counter",
    initialState: {movies:[],recommend:[],trending:[],original:[],news:[],Detaill:[]},
    reducers: {
        
        addmovies: (state, action) => {
            state.movies=action.payload
        },
        addrecommend: (state, action) => {
            state.recommend=action.payload
        },
        addtrending: (state, action) => {
            state.trending=action.payload
        },
        addoriginal: (state, action) => {
            state.original=action.payload
        },
        addnews: (state, action) => {
            state.news=action.payload
        },
        addDetaill: (state, action) => {
            state.Detaill=action.payload
        }

    }
})
export const { addmovies,addrecommend,addtrending, addoriginal, addnews,addDetaill} = Slice.actions
export default Slice.reducer