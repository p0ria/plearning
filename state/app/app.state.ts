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
      console.log("HYDRATE", state, action);
      return {
        ...state,
        ...action.payload.app,
      };
    });
  },
});
