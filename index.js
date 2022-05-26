const express = require("express");
require("dotenv").config();

const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const homeRoute = require("./routes/homeRoute");
const apiSettingRoute = require("./routes/apiSettingRoute");
const videoRoute = require("./routes/videoRoute");
const productImageRoute = require("./routes/productImageRoute");

const app = express();

app.use(express.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/home", homeRoute);
app.use("/api_setting", apiSettingRoute);
app.use("/video", videoRoute);
app.use("/product_image", productImageRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});
