import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
    title: { type: mongoose.SchemaTypes.String, required: true, index: true },
    records: [
        {
            title: { type: mongoose.SchemaTypes.String, required: true },
            imageUrl: { type: mongoose.SchemaTypes.String, required: true }
        }
    ]
})

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)