import express from "express";
import {signupValidation, loginValidation}  from "../Middlewares/AuthValidation.js";
import signup  from "../Controllers/AuthController.js";
import signin from "../Controllers/signinController.js";
const router = express.Router();

router.post("/login", loginValidation, signin);
router.post("/signup", signupValidation, signup);

export default router;
