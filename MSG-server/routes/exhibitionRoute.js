const express = require("express");

const {
  getExhibitions,
  addExhibition,
  removeExhibition,
  updateExhibition,
} = require("../controllers/exhibitionController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getExhibitions);
router.route("/add").post(addExhibition, isAuthenticatedUser);
router.route("/remove/:id").delete(removeExhibition, isAuthenticatedUser);
router.route("/update/:id").put(updateExhibition, isAuthenticatedUser);

module.exports = router;
