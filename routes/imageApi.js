const express = require('express');
import Controller from '../app/Controllers/getData';
const ApiRouter = express.Router();

ApiRouter.post('/',async (request,response)=>{
    const controller = new Controller(response);
    await controller.upsertImages(request);
});

ApiRouter.get('/delete',async (request,response)=>{
    const controller = new Controller(response);
    await controller.delete(request);
});
ApiRouter.get('/',async (request,response)=>{
    const controller = new Controller(response);
    await controller.getImages(request);
});
export default ApiRouter;
////ApiRouter.post('./');
//ApiRouter.post('./');
//ApiRouter.post('./');