import { CategoryCreateDto, CategoryDto } from './../../dtos/category.dto';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createCategoryAction = createAsyncThunk<CategoryDto, CategoryCreateDto>(
    'category/createCategory',
    async (dto: CategoryCreateDto, { dispatch, getState }) => {
        const response = await fetch('http://localhost:3000/api/category', {
            method: 'POST',
            body: JSON.stringify(dto),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json()
    }
)