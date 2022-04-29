const express = require("express");
require("dotenv").config();

const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const homeRoute = require("./routes/homeRoute");

const app = express();

app.use(express.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/home", homeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});
