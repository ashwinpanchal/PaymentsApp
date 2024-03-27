import { AccountService } from "../services/index.js";

const accountService = new AccountService();

const getBalance = async (req, res) => {
  try {
    const response = await accountService.getBalance(req.userId);
    return res.json({
      data: { balance: response },
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

const AccountController = { getBalance };

export default AccountController;
