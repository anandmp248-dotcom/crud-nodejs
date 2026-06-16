global.crypto = require("crypto");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/users", userRoute);
app.use("/category", categoryRoutes);
app.use("/blogs", blogRoutes);

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});