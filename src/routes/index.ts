
import { Router } from 'express';
import botRouter from './searchQuery';

const myBotRouter = Router();
myBotRouter.use('/api/v1', botRouter);

export default myBotRouter;