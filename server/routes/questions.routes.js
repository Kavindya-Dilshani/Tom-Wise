

import questionController from '../controllers/question.controller.js';


export default function authQuestions(app) {

    app.get(
        `/api/questions`,
        [],
        questionController.questions
    );


}