import { UserService } from "../services/index.js";

const userService = new UserService();

export const authenticate = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      return res.status(403).json({
        data: {},
        success: false,
        message: "Something went wrong",
        err: { message: "Invalid token or token not found" },
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = userService.decodedToken(token);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: { message: error.message, error: error },
    });
  }
};
