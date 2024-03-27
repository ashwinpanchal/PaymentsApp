import { UserRepository } from "../repository/index.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, SALT } from "../config/serverConfig.js";
import { hashSync } from "bcrypt";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getById(id) {
    try {
      const user = await this.userRepository.getById(id);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service level");
      throw error;
    }
  }

  async signup(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service level");
      throw error;
    }
  }

  decodedToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      console.log("Something went wrong at the service level");
      throw error;
    }
  }

  async login(data) {
    try {
      const user = await this.userRepository.findBy({
        username: data.username,
      });
      if (!user) {
        throw new Error("No user found");
      }
      if (!user.comparePassword(data.password)) {
        throw new Error("Password Invalid");
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      console.log("Something went wrong at the service level");
      throw error;
    }
  }

  async updateUser(id, data) {
    try {
      let dataForUpdate = {};
      if (data.firstName) {
        dataForUpdate.firstName = data.firstName;
      }
      if (data.lastName) {
        dataForUpdate.lastName = data.lastName;
      }
      if (data.password) {
        const encryptedPassword = hashSync(data.password, SALT);
        dataForUpdate.password = encryptedPassword;
      }
      const response = await this.userRepository.update(id, dataForUpdate);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service level");
      throw error;
    }
  }

  async getBulk(filter) {
    try {
      const response = await this.userRepository.getBulk(filter);
      return response;
    } catch (error) {
      console.log("Something went wrong at the service level");
      throw error;
    }
  }
}

export default UserService;
