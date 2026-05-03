const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.listUsers);
router.get("/:userId", userController.getUser);
router.post("/", userController.createUser);
router.patch("/:userId", userController.updateUser);

module.exports = router;
