import 'dotenv/config';

export const ENV = Object.freeze({
	PORT: process.env.PORT!,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
	TWILLO_ACCOUNT_SID: process.env.TWILLO_ACCOUNT_SID!,
	TWILLO_AUTH_TOKEN: process.env.TWILLO_AUTH_TOKEN
});

export const validateEnvVariables = () => {
	let message = '';

	Object.entries(ENV).map(([key, value]) => {
		if (value === undefined) message += `${key} REQUIRED, `;
		return null;
	});

	if (message !== '') {
		throw new Error(`[ERROR]: ${message}`);
	}
};
