const express = require("express");
const router = express.Router();

const {
  newPaper,
  userPapers,
  getPaper,
  getAll,
} = require("../controllers/paper");

router.route("/newPaper").post(newPaper);
router.route("/userPapers/:id").get(userPapers);
router.route("/getPaper/:paper").get(getPaper);
router.route("/getAll").get(getAll);

module.exports = router;
