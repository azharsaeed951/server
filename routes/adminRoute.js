const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/", adminController.addAdmin);

router.get("/", adminController.getAllAdmins);

router.get("/:id", adminController.getAdminByID);

module.exports = router;
