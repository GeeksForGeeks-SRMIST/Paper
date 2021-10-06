const express = require("express");
const router = express.Router();

const { newPaper, userPapers } = require("../controllers/paper");

router.route("/newPaper").post(newPaper);
router.route("/userPapers/:id").get(userPapers);

module.exports = router;
