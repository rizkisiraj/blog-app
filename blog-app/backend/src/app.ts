import express from 'express';
import { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoute from './routes/postRoute';
import routerLinks from './utils/linkRoutes';
import bodyParser from 'body-parser'

const app:Express = express();
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL,{
})
.then(() => console.log("mongodb is running"))
.catch(e => console.log(e));


const port = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routerLinks.POSTS, postRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});