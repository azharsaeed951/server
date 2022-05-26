const express = require("express");
const router = express.Router();
const productImageController = require("../controllers/productImageController");

router.get("/", productImageController.getAllImages);

router.get("/:id", productImageController.getImageByID);

router.post("/", productImageController.addImage);

module.exports = router;
