import mongoose from 'mongoose'

export const CommentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema)