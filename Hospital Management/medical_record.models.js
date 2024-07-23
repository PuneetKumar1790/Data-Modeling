import mongoose from mongoose
const medicalRecordSchema=mongoose.Schema({

},{timestamps})

export const MedicalRecord=mongoose.models("MedicalRecord",medicalRecordSchema)