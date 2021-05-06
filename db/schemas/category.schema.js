import mongoose from 'mongoose'

export const CategorySchema = new mongoose.Schema({
    title: { type: mongoose.SchemaTypes.String, required: true, index: true, unique: true },
    icon: {
        type: { type: mongoose.SchemaTypes.String, required: true },
        value: { type: mongoose.SchemaTypes.String, required: true }
    },
    courses: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }]
})

export default moongoose.models.Category || mongoose.model('Category', CategorySchema)