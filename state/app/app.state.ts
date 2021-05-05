import { getUsername } from './app.effects';
import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";
import { hydrate } from "../root.actions";

export type AppState = RootState["app"];

export const appState = createSlice({
  name: "app",
  initialState: {
    username: null,
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.app,
      };
    });
    builder.addCase(getUsername.fulfilled, (state, { payload }) => {
      console.log('getUsername reducer', payload)
      state.username = payload;
    })
  },
});
