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

const transaction = async (req, res) => {
  try {
    const { toUser, amount } = req.body;
    const response = await accountService.transaction(
      req.userId,
      toUser,
      amount * 100
    );
    return res.json({
      success: response,
      message: "Transaction Successful",
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

const AccountController = { getBalance, transaction };

export default AccountController;
