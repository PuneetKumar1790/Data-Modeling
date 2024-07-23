import mongoose from mongoose
const hospitalSchema=mongoose.Schema({

},{timestamps})

export const hospital=mongoose.models("hospital",hospitalSchema)