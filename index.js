import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRouter from "./Routes/AuthRouter.js"; 
import "./Models/db.js";
const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://shopora-seven.vercel.app"
];
// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Routes
app.use("/auth", AuthRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
