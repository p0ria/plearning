import Category from '../schemas/category.schema'
import { toDto } from '../../utils/db-utils'
import CategoryDto from '../../dtos/category.dto'

export const getAllCategories = async (...relations): Promise<CategoryDto[]> => {
    let categories = await Category.find().lean()
    categories = await Promise.all(categories.map(category => populateCategory(category, ...relations)))
    return categories.map(category => toDto(category) as CategoryDto);
}

export const createCategory = async (category: Partial<CategoryDto>): Promise<CategoryDto> => {
    const newCategory = await new Category(category).save()
    return toDto(newCategory) as CategoryDto
}

export const populateCategory = async (category, ...relations) => {
    return Category.populate(category, relations)
}