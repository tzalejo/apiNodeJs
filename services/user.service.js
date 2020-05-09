const { toDomainEntity } = require('./../domain/mappers');
const { toDbEntity } = require('./../dal/mappers');
class UserService { 
  constructor({UserRepository}){
    this._userRepository = UserRepository;
  }
  async getUser() {
    console.log();
    const users = await this._userRepository.getUser();
    return users.map(toDomainEntity);
  }

  async creatUser(user){
    user = toDbEntity(user);
    const createUser = await this._userRepository.creatUser(user);
    return createUser;
  }
  
}

module.exports = UserService;