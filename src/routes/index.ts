import { Router } from 'express';

const responseMessage = require("../controllers/WhatsappBot")


const botRouter = Router();

botRouter.post('/response', responseMessage.handleIncomingResponse);

export default botRouter;