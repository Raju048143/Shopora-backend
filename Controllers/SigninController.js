import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import dotenv from "dotenv";
dotenv.config();

// Signin
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "42h" }
    );
    
        res.cookie("token", token, {
          httpOnly: true, 
          secure: process.env.NODE_ENV === "production", 
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, role: user.role, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default signin;
