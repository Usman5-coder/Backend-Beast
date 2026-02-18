import mongoose from 'mongoose'

const productSchema = new mongoose.schema({
     name:{
         type:String,
         required:true
     },
     description:{
         type:String,
         required:true
     },
     price:{
         type:Number,
         required:true
     },
     quantity:{
         type:Number,
         required:true
     },
     category:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'Category',
         required:true
     },
     owner:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'User',
         required:true
     },
     image: {
        type: String,
        required: true
     }
},{TimeRanges:true})

export const Product = mongoose.model('Product', productSchema)