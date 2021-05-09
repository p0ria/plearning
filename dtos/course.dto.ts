import { RecordDto } from "./record.dto";

export class CourseDto {
    id: string;
    title: string;
    records: RecordDto[];
    createdAt: string;
    updatedAt: string;
}