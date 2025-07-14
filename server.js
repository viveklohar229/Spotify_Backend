import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/Routes/songRoute.js';
import connectDb from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/Routes/albumRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000
connectDb();
connectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

// Initializing Routes
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);

app.get("/",(req,res)=>res.send("API working"))

app.listen(port,()=>console.log(`Server started on ${port}`)
)
 