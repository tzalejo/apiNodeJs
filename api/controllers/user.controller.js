class UserController {
  constructor(){}
  
  sayHello(req, res){
    return res.send({message: 'hola mundo'});
  }
}

module.exports = UserController;