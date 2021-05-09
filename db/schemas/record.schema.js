import mongoose from 'mongoose'

export const RecordSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

const Record = mongoose.models.Record || mongoose.model('Record', RecordSchema)

export default Record