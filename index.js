import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./Models/db.js";
import AuthRouter from "./Routes/AuthRouter.js"; 
import categoryRoutes from "./Routes/categoryRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
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

app.use(express.json());
// Routes
app.use("/auth", AuthRouter);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
