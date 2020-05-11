const mapper = require('automapper-js');

class BaseBusiness {
  constructor(EntityRepository, entityToMap ){

    this.entityToMap = entityToMap
    this._entityRepository = EntityRepository;
  }
  
  async getAll(){
    const entities = await this._entityRepository.getAll();
    return entities.map((entity) => mapper(this.entityToMap, entity.toJSON() ));
  }

  async get(id){
    const entity = await this._entityRepository.get(id);
    if (!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async create(entity){
    entity = mapper(this.entityToMap, entity);
    const createdEntity = await this._entityRepository.create(entity);
    return mapper(this.entityToMap, createdEntity.toJSON());
  }

  async update(id, entity) {
    entity.id = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.update(id, entity);
    return mapper(this.entityToMap, updateEntity);
  }

  async delete(id) {
    return this._entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;