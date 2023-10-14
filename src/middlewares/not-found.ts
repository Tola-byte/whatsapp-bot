import type { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (_: Request, __: Response, next: NextFunction) => {
	next(new Error('Invalid Route'));
};
