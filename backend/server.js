const express = require("express");
const connectDB = require("./config/connectDB");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
