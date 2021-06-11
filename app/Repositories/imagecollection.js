import  Collections from '../Models/Images';
import * as data from '../../connection/connection';
export default class imagecollection {
  /**
   * find Catalog Upload
   * @param {*} obj
   * @returns collection
   */
   
  
   async upsert(value={}){
    try{    
      //const par =  await Collections.create(obj);    
      console.log({name:value.name,accountID:value.accountID })
      return Collections.findOne({ where:{name:value.name,accountID:value.accountID }}).then(function(obj) {
        // update
        if(obj)
            return obj.update(value);
        // insert
        return Collections.create(value);
    })
    }catch(err){
      return err.parent.sqlMessage;

    }
    
  }
  async delete(obj={}){
    try{    
      const par =  await Collections.destroy({where : obj});
      return par;
    }catch(err){
      return 'failure';
    }
  }
  async getall(obj={}){
    try{    
      const par =  await Collections.findAll({});
      return par;
    }catch(err){
      return 'failure';
    }
  }async get(obj={}){
    try{    
      const par =  await Collections.findAll({where : obj});
      return par;
    }catch(err){
      return 'failure';
    }
  }

/*  async getCountByStyles(fetchOptions) {
    let obj = CatalogFeedback.collection().query();
    return await obj.select('style_id', 'is_liking').count('* as count').groupBy('style_id').fetchPage(fetchOptions);;
  } */

  /**
   * upsert Catalog Feedback method
   * @param {*} obj
   * @returns collection
   */
 
}
