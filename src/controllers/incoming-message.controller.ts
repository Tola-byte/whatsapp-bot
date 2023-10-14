import type { Response, NextFunction } from 'express';
import twilio from 'twilio';
import { ENV } from '../config';
import type { TwilloRequestBody } from '../types/twilo';
import LLM from '../llm';
import { findLinks } from '../helpers/find-link';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Express {
		interface Request {
			body: TwilloRequestBody;
		}
	}
}

twilio(ENV.TWILLO_ACCOUNT_SID, ENV.TWILLO_AUTH_TOKEN);
const { MessagingResponse } = twilio.twiml;

export const incomingMessageController = async (
	request: any,
	response: Response,
	next: NextFunction
) => {
	try {
		const twiml = new MessagingResponse();

		if (request.body?.Body !== '') {
			const llm = await LLM();

			if ((request.body?.Body as string).toLowerCase().startsWith('add')) {
				const links = findLinks(request.body?.Body);

				links.forEach((link) => {
					llm.add('web_page', link).catch((error) => {
						next(error);
					});
				});

				twiml.message('Links Added 😊, Wait for a few minutes before asking a question');
			} else {
				const result = await llm.query(request.body?.Body);

				twiml.message(result);
			}
		} else {
			twiml.message('No text sent 😒');
		}

		response.status(200).send(twiml.toString());
	} catch (error) {
		next(error);
	}
};
