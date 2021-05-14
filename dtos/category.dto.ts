import { CourseDto } from "./course.dto"
import IconDto from "./icon.dto"

export class CategoryDto {
    id: string
    title: string
    icon: IconDto
    courses: CourseDto[]
    createdAt: string
    updatedAt: string
}

export type CategoryCreateDto = Pick<CategoryDto, 'title' | 'icon'>;