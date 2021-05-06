import mongoose from 'mongoose'
import { IconType } from '../../dtos/icon.dto';

export const CategorySchema = new mongoose.Schema({
    title: { type: mongoose.SchemaTypes.String, required: true, index: true, unique: true },
    icon: {
        type: { type: mongoose.SchemaTypes.String, enum: [IconType.Icon, IconType.Image] },
        value: mongoose.SchemaTypes.String
    },
    courses: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category