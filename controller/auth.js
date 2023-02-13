const User = require("../model/userModel");

const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({
      success: false,
      msg: "Please provide all neccessary information",
    });
  }
  try {
    const user = await User.create({ ...req.body });
    const token = user.generateToken();
    res
      .status(201)
      .json({ data: { name: user.name, email: user.email }, token });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: "Please enter email or password",
    });
  }

  try {
    console.log(email, password)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false });
    }
    const auth = await user.comparePassword(password);
    if (!auth) {
      return res.status(400).json({ success: false });
    }
    const token = user.generateToken();
    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = { register, login };
