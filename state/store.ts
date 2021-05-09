import { categoryState } from './category/category.state';
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { appState } from "./app/app.state";

export const rootReducer = {
  [appState.name]: appState.reducer,
  [categoryState.name]: categoryState.reducer
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export type Store = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Store["getState"]>;

export default createWrapper(makeStore);
