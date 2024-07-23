import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    name:{
        typr:String,
        required:true,
    }
},{timestamps:true})

export const Category = mongoose.model("Category",categorySchema)//In DB it store in lower case with "s" at end 
//if catogries =catogeries in DB it is smart