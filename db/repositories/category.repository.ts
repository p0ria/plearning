import { CategoryDto } from '../../dtos/category.dto';
import { toDto } from '../../utils/db-utils';
import Category from '../schemas/category.schema';
import { CategoryCreateDto } from './../../dtos/category.dto';

export const getAllCategories = async (): Promise<CategoryDto[]> => {
    let categories = await Category.find().lean()
    return categories.map(category => toDto<CategoryDto>(category))
}

export const createCategory = async (category: Partial<CategoryCreateDto>): Promise<CategoryDto> => {
    const newCategory = await new Category(category).save()
    return toDto<CategoryDto>(newCategory)
}

export const populateCategory = async (category, ...relations) => {
    return Category.populate(category, relations)
}