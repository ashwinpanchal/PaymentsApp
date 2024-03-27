class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD repo");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.find();
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD repo");
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD repo");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD repo");
      throw error;
    }
  }

  async update(id, data) {
    try {
    } catch (error) {
      console.log("Something went wrong in CRUD repo");
      throw error;
    }
  }
}

export default CrudRepository;