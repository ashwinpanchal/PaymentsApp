import { CrudRepository } from "./index.js";
import { User } from "../models/index.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

export default UserRepository;
