const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/users", adminController.getAllUsers);
router.get("/contacts", adminController.getAllContacts);
router.get("/feedbacks", adminController.getAllFeedbacks);

router.delete("/users/:id", adminController.deleteUser);
router.delete("/contacts/:id", adminController.deleteContact);
router.delete("/feedbacks/:id", adminController.deleteFeedback);

module.exports = router;
