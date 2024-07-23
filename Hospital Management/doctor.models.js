import mongoose from mongoose
const doctorSchema=mongoose.Schema({

},{timestamps})

export const doctor=mongoose.models("doctor",doctorSchema)