import { CourseDto } from "./course.dto"
import IconDto from "./icon.dto"

export default class CategoryDto {
    id: string
    title: string
    icon: IconDto
    courses: CourseDto[]
    createdAt: string
    updatedAt: string
}