import type { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: any, _: Request, response: Response, __: NextFunction) => {
	response.status(500).send({
		errors: {
			message: error.message
		}
	});
};
