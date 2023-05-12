import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,

   
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
   login:(state ,action)=>{
state.user = action.payload

   },
   logout:(state)=>{
state.user = null

   },
   addSongsToFavs:(state , action)=>{
      const track = action.payload
state.user.Favs.push(track)
   },
   removeFav:(state,action)=>{
  state.user.Favs = state.user.Favs.filter((song)=>song.key !== action.payload.key)  
   }
  
    }
    
})


export const {login , addSongsToFavs , logout ,removeFav}  = userSlice.actions
export default userSlice.reducer