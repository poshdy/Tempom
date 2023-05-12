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
  
    }
    
})


export const {login , addSongsToFavs , logout}  = userSlice.actions
export default userSlice.reducer