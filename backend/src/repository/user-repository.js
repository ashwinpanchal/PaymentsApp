import { CrudRepository } from "./index.js";
import { User } from "../models/index.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }

  async getBulk(filter) {
    try {
      const response = await User.find({
        $or: [
          { firstName: { $regex: filter, $options: "i" } },
          { lastName: { $regex: filter, $options: "i" } },
        ],
      }).select("firstName lastName _id");
      return response;
    } catch (error) {
      console.log("Something went wrong at the repository layer");
      throw error;
    }
  }
}

export default UserRepository;
