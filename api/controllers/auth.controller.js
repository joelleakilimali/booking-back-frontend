import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json("user has been created");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "user doesnt exist "));
    }

    const isPasswordCorresct = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorresct) {
      return next(createError(400, "wrong password or username"));
    }
    //creation  of our token where we are sending the information from our json , for each request we will check the token info
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    //destructure our information from our user so that we will not send the password and isAdmin information to the  json
    const { password, isAdmin, ...otherDetails } = user._doc;
    //send our token into a cookie , used as a middlware in our index file

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ otherDetails });
    console.log(token);
  } catch (err) {
    next(err);
  }
};
