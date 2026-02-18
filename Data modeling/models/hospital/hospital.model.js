import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    
},{timestamps:true})

export const Hostpital = mongoose.model('Hospital', hospitalSchema)