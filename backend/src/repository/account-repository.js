import { CrudRepository } from "./index.js";
import { Account } from "../models/index.js";

class AccountRepository extends CrudRepository {
  constructor() {
    super(Account);
  }

  async findBy(data) {
    try {
      const response = await Account.find(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw error;
    }
  }
}

export default AccountRepository;
