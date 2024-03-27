import { AccountRepository } from "../repository/index.js";

class AccountService {
  constructor() {
    this.accountRepository = new AccountRepository();
  }

  async getBalance(userId) {
    try {
      const response = await this.accountRepository.findBy({ user: userId });
      const balance = response[0].balance;
      return balance / 100;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async transaction(userId, toUser, amount) {
    try {
      const response = await this.accountRepository.transaction(
        userId,
        toUser,
        amount
      );
      return response;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}

export default AccountService;
