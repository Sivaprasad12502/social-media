import express from "express";
const app = express();
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/post.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import relationShipRoutes from './routes/relationship.js'
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
dotenv.config()
//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

// ✅ Serve static uploaded files
app.use("/upload", express.static("public/upload")); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file=req.file;
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/relationships", relationShipRoutes);
app.listen(800, () => {
  console.log("API Working");
});
