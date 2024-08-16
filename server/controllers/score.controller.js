import Score from "../models/Score.js";


const getAllScores = async (req, res) => {
    try {
        const score = await Score.find().sort({ score: -1 }).limit(5);
        res.json(score);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const saveScore = async (req, res) => {
    try {
        const { userId, name, score } = req.body;
        if (!userId || !name || !score) return next(createError("Data not Provided", 400));

        const getScore = await Score.findOne({ userId });

        if (!getScore) {
            await Score.create({ userId, name, score });
        } else {
            if (score > getScore.score) {
                await Score.updateOne({ userId }, { score })
            }
        }
        res.json({ msg: "Results saved successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const scoreController = { getAllScores, saveScore };

export default scoreController;