import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import userReducer from "./features/userSlice";
import { shazamApi } from "./services/shazamApi";

const persistConfig = {
  key: "root",
  storage,
  blacklist:['player','shazamApi']
};
const reducers = combineReducers({
  user: userReducer,
  player: playerReducer,
  [shazamApi.reducerPath]: shazamApi.reducer,
})
const persistedReducer = persistReducer(persistConfig,reducers);
export const store = configureStore({
  reducer: persistedReducer 
   
    
  ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
