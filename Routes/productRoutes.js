import express from "express";
import { createProduct , getProducts} from "../Controllers/productController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/", getProducts);
export default router;
