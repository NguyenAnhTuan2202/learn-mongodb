const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");
const PORT = 8000;

const app = express();

// Active env
dotenv.config();

// Connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
