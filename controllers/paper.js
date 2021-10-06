const Paper = require("../models/paperModel");
const ErrorResponse = require("../utils/errorResponse");

exports.newPaper = async (req, res, next) => {
  const { id, email, pdf_url, title, description } = req.body;

  try {
    const paper = await Paper.create({
      id,
      email,
      pdf_url,
      title,
      description,
    });
    await paper.save();
    res.send(paper);
  } catch (err) {
    console.log(err);
  }
};

exports.userPapers = async (req, res, next) => {
  let userId = req.params.id;
  const papers = await Paper.find({ id: userId });
  res.send(papers);
};
