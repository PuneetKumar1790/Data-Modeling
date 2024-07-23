import { setDriver } from "mongoose"
import mongoose from mongoose
const hospitalSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    addressLine2:{
        type:String,
    },
    pincode:{
        type:String,
        required:true,
    },
    specialisedIn:[
        {
        type:String
    }
]

},{timestamps})

export const hospital=mongoose.models("hospital",hospitalSchema)