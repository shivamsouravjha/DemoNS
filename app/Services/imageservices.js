import Imagecollection from '../Repositories/imagecollection';
export default class getImage{
    constructor() {
        this.repo = new Imagecollection();
      }
      async upsert(args) {
        try {
            return await this.repo.upsert(args);
        } catch (error) {
          throw error;
        }
    } 
    async get(args) {
      try {
          return await this.repo.get(args);
      } catch (error) {
        throw error;
      }
  }async getall() {
    try {
        return await this.repo.getall();
    } catch (error) {
      throw error;
    }
}   
async delete(args) {
  try {
      return await this.repo.delete(args);
  } catch (error) {
    throw error;
  }
} 
}