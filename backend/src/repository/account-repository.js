import mongoose from "mongoose";

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

  async transaction(userId, toUser, amount) {
    try {
      // const session = await mongoose.startSession();
      // session.startTransaction();

      // const account = await Account.findOne({ user: userId }).session(
      //   session
      // );

      const account = await Account.findOne({ user: userId });

      if (!account || account.balance < amount) {
        // await session.abortTransaction();
        throw new Error("Insufficient balance");
      }

      // const toAccount = await Account.findOne({ user: toUser }).session(
      //   session
      // );
      const toAccount = await Account.findOne({ user: toUser });

      if (!toAccount) {
        // await session.abortTransaction();
        throw new Error("Invalid account");
      }

      // await Account.updateOne(
      //   { user: userId },
      //   { $inc: { balance: -amount } }
      // ).session(session);
      // await Account.updateOne(
      //   { user: toUser },
      //   { $inc: { balance: amount } }
      // ).session(session);

      await Account.updateOne({ user: userId }, { $inc: { balance: -amount } });
      await Account.updateOne({ user: toUser }, { $inc: { balance: amount } });

      // await session.commitTransaction();

      return true;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw error;
    }
  }
}

export default AccountRepository;
