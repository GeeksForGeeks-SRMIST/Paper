const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { id, login_type, identifier } = req.body;

  try {
    const user = await User.create({
      id,
      login_type,
      identifier,
    });
    console.log(user);

    await user.save();
  } catch (err) {
    console.log(err);
  }
};
