import { google } from 'googleapis';
import {config} from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import twilio from 'twilio';

config();

// get the below from .env 
const {
  SID: accountSid, 
  KEY: TwilloAuthToken,
  APIKEY: googleApiKey,
  CX: cx,
} = process.env;

twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;
const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */
class WhatsappBot {
  /**
   * @memberof WhatsappBot
   * @param {Request} req - Request sent to the route
   * @param {Response} res - Response sent from the controller
   * @param {NextFunction} next - Error handler
   * @returns {Response} - object representing response message
   */
  public static async googleSearch(req: Request, res: Response, next: NextFunction): Promise<any> {
    const twiml = new MessagingResponse();
    const q: string = req.body.Body;
    const options = { cx, q, auth: googleApiKey };

    try {
      const result: any = await customsearch.cse.list(options);
      const firstResult = result.data.items[0];
      const searchData = firstResult.snippet;
      const link = firstResult.link;

      twiml.message(`${searchData} ${link}`);

      res.set('Content-Type', 'text/xml');

      return res.status(200).send(twiml.toString());
    } catch (error) {
      return next(error);
    }
  }
}

export default WhatsappBot;
