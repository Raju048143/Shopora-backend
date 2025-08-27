import express from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "../Controllers/categoryController.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/", getCategories);
router.delete("/:id", deleteCategory);

export default router;
