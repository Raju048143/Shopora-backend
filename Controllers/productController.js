import Product from "../models/Product.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
console.log(title, description,price, category)
    if (!title || !price || !category) {
      return res.status(400).json({ message: "Title, price, and category are required" });
    }

    const product = new Product({
      title,
      description,
      price,
      category,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name description"); 
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};