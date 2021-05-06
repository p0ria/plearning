import { hydrate } from './../root.actions';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../store';

export type CategoryState = RootState[typeof categoryState.name]

export const categoryState = createSlice({
    name: 'category',
    initialState: {
        categories: []
    },
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(hydrate, (state, action) => {
            return {
                ...state,
                ...action.payload.category
            }
        })
    }
})