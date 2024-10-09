import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/UserRoute.js";
import productRoute from "./routes/ProductRoute.js";

// App config

const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// Api endpoints
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
