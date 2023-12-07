import mongoose from 'mongoose';
import { PORT, mongoDBURL} from "./config.js";
import express from "express";
import { Book } from './models/bookModel.js';
import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get('/', (request, response) => {
    
    return response.status(234).send('Welcome to Mern stack tutorial by abishek');
});

// Route for saving a new Book

app.use('/books', booksRoutes);

mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database');
    app.listen(5555, () => {
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})