import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import clientAxios from "../../../services/config/axios";

export const getSucursales = createAsyncThunk(
  "eCommerceApp/getSucursales",
  async () => {
    const response = await clientAxios.get("/api/sucursales");
    const data = await response.data;
    return data;
  }
);

export const removeSucursales = createAsyncThunk(
  "eCommerceApp/removeSucursales",
  async (SucursalIds, { dispatch, getState }) => {
    await clientAxios.post("/api/e-commerce-app/remove-sucursales", {
      SucursalIds,
    });

    return SucursalIds;
  }
);

const sucursalesAdapter = createEntityAdapter({});

export const { selectAll: selectSucursales, selectById: selectSucursalById } =
  sucursalesAdapter.getSelectors((state) => {
    return state.eCommerceApp.sucursales;
  });

const sucursalesSlice = createSlice({
  name: "eCommerceApp/sucursales",
  initialState: sucursalesAdapter.getInitialState({
    searchText: "",
  }),
  reducers: {
    setSucursalesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || "" }),
    },
  },
  extraReducers: {
    [getSucursales.fulfilled]: sucursalesAdapter.setAll,
    [removeSucursales.fulfilled]: (state, action) =>
      sucursalesAdapter.removeMany(state, action.payload),
  },
});

export const { setSucursalesSearchText } = sucursalesSlice.actions;

export default sucursalesSlice.reducer;
