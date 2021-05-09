import mongoose from 'mongoose'

export const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    records: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Comment" }]
}, { timestamps: true })

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema)

export default Course