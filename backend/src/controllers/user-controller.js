import { UserService } from "../services/index.js";

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const { username, firstName, lastName, password } = req.body;
    const response = await userService.signup({
      username,
      firstName,
      lastName,
      password,
    });
    const token = response.genJWT();
    return res.status(201).json({
      data: token,
      success: true,
      message: "Successfully sign up",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};

const login = async (req, res) => {};

const UserController = { signup };

export default UserController;
