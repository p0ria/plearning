import mongoose from 'mongoose'

export const IconSchema = new mongoose.Schema({
    value: { type: String, unique: true, index: true, required: true }
})
IconSchema.index({ value: 'text' })

const Icon = mongoose.models.Icon || mongoose.model('Icon', IconSchema)

export default Icon