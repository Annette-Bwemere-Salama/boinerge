import mongoose from "mongoose";
export const Schema = mongoose.Schema;
const donationSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    DonatEmail: {
        type: String,
        required: true
    }
});

 export const Donation = mongoose.model("Donation", donationSchema)