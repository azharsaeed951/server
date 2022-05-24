const express = require("express");
const router = express.Router();
const apiSettingController = require("../controllers/apiSettingController");

router.get("/", apiSettingController.getAllApiSettings);

module.exports = router;
