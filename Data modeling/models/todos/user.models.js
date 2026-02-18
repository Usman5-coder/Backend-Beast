import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: Number,
        required:true,
        min: [8, "Password must have at least 8 characters!"],
        max: 12
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)