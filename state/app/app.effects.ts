import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsername = createAsyncThunk(
    'app/getUsername',
    async (_, { dispatch, getState }) => {
        return 'Mohammad Akbarzadeh'
    }
)