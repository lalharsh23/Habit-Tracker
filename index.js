require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const habitRouter = require("./routes/index");

app.use("/", habitRouter);

// Connect to database
connectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
