const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // Correct path to db.js
const { port } = require("./config/server");
const userRoutes = require("./routes/userRoutes");
const carrierRoutes = require("./routes/carrierRoutes");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const certificateRoutes = require("./routes/certificateRoutes");

const path = require("path");

const app = express();
app.use(express.json());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB(); // Ensure this function call is correct
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/career", carrierRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", certificateRoutes);

app.get("/", (req, res) => {
  res.json("server is running");
});

app.get("*", (req, res) => {
  res.status(404).json({ status: "error", message: "Page Not Found" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
