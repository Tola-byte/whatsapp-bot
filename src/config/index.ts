import 'dotenv/config';

export const ENV = Object.freeze({
	PORT: process.env.PORT!
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
