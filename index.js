import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRouter from "./Routes/AuthRouter.js"; 
import "./Models/db.js";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: process.env.FRONTNED_URL,
  credentials: true
}));

// Routes
app.use("/auth", AuthRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
