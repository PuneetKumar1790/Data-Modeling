import mongoose from "mongoose";
//For no.of items create new mini schema
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:number,
        required:true,

    }
})
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:string,
        enum:['Pending','Cancelled','Delivered'],// anyone not able to change value use enumeration
        default:'Pending'
    }
},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema)