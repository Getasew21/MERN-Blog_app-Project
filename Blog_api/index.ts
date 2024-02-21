
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth";
import userRoute from "./routes/users";
import postRoute from "./routes/posts";
import categoryRoute from "./routes/categories";
import multer, { Multer } from "multer";
import path from "path";
import cors from "cors";
dotenv.config();
const app: Express = express();
const http =require('http');
const server =http.createServer(app);
const {Server}=require("socket.io");
const io = new Server(server);
// "module": "NodeNext",
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.resolve(__dirname, "src/images")));
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
  app.use('*', (req, res, next) => {
  res.json = (data) => res.type('json').send(JSON.stringify(data, null, 4));
  next();
});

const storage= multer.diskStorage({
  destination: (req:Request, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req:Request, file, cb) => {
    cb(null, req.body.name);
  },
});
app.get('/',(req,res)=>{
  res.send('Hello World');
})

const upload: Multer = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req: Request, res: Response) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running on 5000.");
});
