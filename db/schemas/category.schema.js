import mongoose from 'mongoose'
import { IconType } from '../../dtos/icon.dto';

export const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true, index: true, unique: true },
    icon: {
        type: { type: String, enum: [IconType.Icon, IconType.Image] },
        value: String
    },
    courses: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category