import mongoose from "mongoose";


const scoreSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Score = mongoose.model('Score', scoreSchema);
export default Score;
