import mongoose from mongoose
const patientSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagnosedWith:{
        type:string,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },{timestamps:true});
export const Patient=mongoose.model("Patient",patientSchema),