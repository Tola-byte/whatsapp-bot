import { Router } from 'express';
import { incomingMessageController } from '../controllers';

export const incomingMessageRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
incomingMessageRouter.post('/incoming', incomingMessageController);
