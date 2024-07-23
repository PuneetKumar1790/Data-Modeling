
import mongoose from "mongoose";
import { Category } from "./category.model";
const productSchema= mongoose.Schema({
    description:{
        required:true,
        type:String,

    },
    name:{
        required:true,
        type:String,

    },
    producatImage:{
        type:String,//Images will uplod at services like aws,clodinary that gives url(string)
        price:{
            type:Number,
            default:0,

        },
        stock:{
            type:Number,
            default:0,
        },
        Category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category',
            required:true,

        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'

        }
    }

},{timestamps})

export const Product =mongoose.model("Product",productSchema)// TIP:- const name = jis naam se save karna hai error free