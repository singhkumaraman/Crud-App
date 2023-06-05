const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
//Cross Origin Resource Sharing..
app.use(cors());
// Connecting with MongoDB..
connectDB();
//Body-Parser.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routes.
app.use("/api/goals", require("./routes/goalsRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
// Stating Server At Port Number:5000...
app.listen(5000, () => {
  console.log("Server Runnging...");
});
