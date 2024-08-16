
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import authQuestions from './routes/questions.routes.js';
import authScore from './routes/score.routes.js';

const app = express();

// Server configurations
const config = {
    serverPort: "5000",
    frontEndUrl: "http://localhost:3000"
}

// CORS options
const corsOptions = {
    origin: [config.frontEndUrl],
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
    credentials: true
};


// Enables CORS for requests
app.use(cors(corsOptions));
// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Set Allowed HTTP headers for cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});


/** mongoDb connection */
mongoose.connect('mongodb://127.0.0.1:27017/TomatoDB')
    .then(() => console.log('connected to MongoDB'))
    .catch((error) => console.log('failed to connect MongoDB:', error));


app.get("/", (req, res) => {
    res.json({ message: "Hello from Server" });
});

/*routes */
authRoutes(app);
authQuestions(app);
authScore(app);


// Set port, listen for requests
const PORT = config.serverPort || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
