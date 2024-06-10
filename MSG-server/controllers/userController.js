const User = require("../models/userModel");

const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter all fields",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter all fields",
      });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      console.log("Invalid credentials");
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      console.log("Invalid credentials");
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.logoutUser = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
