import mongoose from "mongoose";
const Schema = mongoose.Schema;
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

const Donation = mongoose.model("Donation", donationSchema)