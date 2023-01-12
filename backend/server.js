import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import articleRoutes from './routes/articleRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(
	cors({
		origin: process.env.CLIENT_URL || '*',
		optionsSuccessStatus: 200,
	}),
);
app.use(express.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);
app.use(
	bodyParser.json({
		limit: '4mb',
	}),
);
dotenv.config();
connectDb()

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/articles',articleRoutes)
app.use('/api/users',userRoutes)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));