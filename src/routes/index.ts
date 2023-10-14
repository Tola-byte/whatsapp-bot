import { Router } from 'express';
import { incomingMessageRouter } from './incoming-message.router';

const baseRouter = Router();

baseRouter.use('/api/v1', incomingMessageRouter);

export default baseRouter;
