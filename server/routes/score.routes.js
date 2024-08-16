
import scoreController from '../controllers/score.controller.js';

export default function authScore(app) {

    app.get(
        `/api/score`,
        [],
        scoreController.getAllScores
    );

    app.post(
        `/api/score`,
        [],
        scoreController.saveScore
    );

}