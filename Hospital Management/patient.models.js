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
    },    
    bloodGroup:{
        type:string,
        required :true,
    },
    gender:{
        type:string,
        enum:["M","F","O"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital",
    }
    },{timestamps:true});
export const Patient=mongoose.model("Patient",patientSchema)