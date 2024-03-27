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
      data: { token },
      success: true,
      message: "Successfully sign up",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: { message: error.message, error: error },
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login({ username, password });
    return res.json({
      data: { token },
      success: true,
      message: "Successfully log in",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: { message: error.message, error: error },
    });
  }
};

const updateRequest = async (req, res) => {
  try {
    const { firstName, lastName, password } = req.body;
    await userService.updateUser(req.userId, {
      firstName,
      lastName,
      password,
    });
    return res.json({
      success: true,
      message: "Successfully updated the user information",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: { message: error.message, error: error },
    });
  }
};

const getBulk = async (req, res) => {
  try {
    const { filter } = req.query;
    const response = await userService.getBulk(filter);
    return res.json({
      data: response,
      success: true,
      message: "Successfully fetched",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: { message: error.message, error: error },
    });
  }
};

const UserController = { signup, login, updateRequest, getBulk };

export default UserController;
