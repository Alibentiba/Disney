import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "counter",
    initialState: {movies:[],recommend:[],trending:[],original:[],news:[],Detaill:[],userinfo:{
        name: "",
        email: "",
        photo: "",
      }},
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
        },
        setUserLoginDetails: (state, action) => {
            state.userinfo.name = action.payload.name;
            state.userinfo.email = action.payload.email;
            state.userinfo.photo = action.payload.photo;
          },
      
          setSignOutState: (state) => {
            state.userinfo.name = null;
            state.userinfo.email = null;
            state.userinfo.photo = null;
          }

    }
})
export const { addmovies,addrecommend,addtrending, addoriginal, addnews,addDetaill,setUserLoginDetails,setSignOutState} = Slice.actions
export default Slice.reducer