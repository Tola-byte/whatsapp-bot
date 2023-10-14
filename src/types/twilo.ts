export interface TwilloRequestBody {
	SmsMessageSid: string;
	NumMedia: string;
	ProfileName: string;
	SmsSid: string;
	WaId: string;
	SmsStatus: 'received';
	Body: string;
	To: string;
	NumSegments: string;
	ReferralNumMedia: string;
	MessageSid: string;
	AccountSid: string;
	From: string;
	ApiVersion: string;
}
