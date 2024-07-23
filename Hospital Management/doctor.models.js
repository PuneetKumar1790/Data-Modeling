import mongoose from mongoose
const doctorSchema=mongoose.Schema({
name:{
    type:String,
    required:true,
},
salary:{
    type:String,// if we add dollar and ruppes ad string
    required:true
},
qualifaications:{
    type:String,
    required:true,
},
experienceInYears:{
    type:Number,
    default:0,
},
worksInHospitals:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:hospital,

    }
]
},{timestamps})

export const doctor=mongoose.models("doctor",doctorSchema)