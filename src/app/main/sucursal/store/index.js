import { combineReducers } from "@reduxjs/toolkit";
import sucursales from "./sucursalesSlice";
const reducer = combineReducers({
  sucursales,
});

export default reducer;
