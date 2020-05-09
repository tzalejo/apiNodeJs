class UserController {
  constructor({UserController}){
    this._userController = UserController;
  }
  
  async getUsers(req, res){
    const users = await this._userController.getUsers();
    
    return res.send({
      error: false, 
      payload: users
    });

  }

  async createUser(req, res) {
    const { body } = req;
    const createUser = await tihs._userController.createUser(body)
    return res.send({
      error: false,
      payload: createUser
    });
  }

}

module.exports = UserController;