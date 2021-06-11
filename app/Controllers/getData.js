import Validator from '../Validator/validator';
import imageService from '../Services/imageservices' 
import { connect } from 'mongoose';
export default class Controller{
    constructor(response){
        this.response =response;
        this.service = new imageService();

    }
    upsertImages(request){
      try {
        // let params = this.validateInternalParams(request, Validator.images)           
        
        let {value,error} = Validator.images.create.validate(request.body);
        

        if(error){
          return this.response.status(501).json({ error: 'error at validation' });
        }
        this.service.upsert(value).then(res => {
            this.sendResponse(res)
          }).catch(err => {
            // console.log(err);

            this.response.status(501).json({ error: 'error101' });
          })
      } catch (error) {
        this.response.status(501).json({ error: 'error' });
      }
    
  }  
  
  delete(request){
    try {      
      // console.log((Object.keys(request.body).length))
      if(!(Object.keys(request.body).length)){
        return this.response.status(501).json({ error: 'no body present' });
      }
      let {value,error} = Validator.images.delete.validate(request.body);
      if(error){
        return this.response.status(501).json({ error: 'error at validation' });
      }
      this.service.delete(value).then(res => {
          this.sendResponse(res)
        }).catch(err => {
          // console.log(err);

          this.response.status(501).json({ error: 'error101' });
        })
    } catch (error) {
      this.response.status(501).json({ error: 'error' });
    }
  
} 
  getImages(request){
    try {
      if(!(Object.keys(request.body).length)){
        this.service.getall().then(res => {
           return this.sendResponse(res)
        }).catch(err => {
          return this.response.status(501).json({ error: 'error101' });
        })
      }
        let {value,error} = Validator.images.get.validate(request.body);
        if(error){
          return this.response.status(501).json({ error: 'error at validation' });
        }
        this.service.get(value).then(res => {
            this.sendResponse(res)
          }).catch(err => {
            this.response.status(501).json({ error: 'error101' });
          })
      } catch (error) {
        this.response.status(501).json({ error: 'error' });
      }    
}
    sendResponse(data) {
        this.response.status(200).json({ data });
      }


      
};




