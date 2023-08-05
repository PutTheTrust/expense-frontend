import { createSlice } from "@reduxjs/toolkit";

const initialState = { userId: "", name: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      (state.userId = action.payload.id), (state.name = action.payload.name);
    },
    chechAuth: (state, action) => {
      (state.userId = action.payload.id), (state.name = action.payload.name);
    },
  },
});

export const { saveUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
