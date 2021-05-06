import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
    title: { type: mongoose.SchemaTypes.String, required: true, index: true },
    records: [
        {
            title: { type: mongoose.SchemaTypes.String, required: true },
            imageUrl: { type: mongoose.SchemaTypes.String, required: true },
            videoUrl: { type: mongoose.SchemaTypes.String, required: true },
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema)

export default Course