import mongoose from "mongoose";
import { Schema } from "./Dotations";
 
const dimeSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    DimeMail: {
        type: String,
        required: true
    },
    firsname: {
        type: String
    },
    lastName: {
        type: String
    }
})

export const Dime = mongoose.model("Dime", dimeSchema);