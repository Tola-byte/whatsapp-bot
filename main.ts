import http from 'http';
import App from './src/app';
import { ENV, validateEnvVariables } from './src/config';

function start() {
	validateEnvVariables();

	const app = App();

	const server = http.createServer(app);

	server.listen(ENV.PORT, () => {
		console.log(`Server started at http://localhost:${ENV.PORT} 🚀`);
	});

	process.on('uncaughtException', (error) => {
		console.log(error);
		server.close(() => {
			process.exit(1);
		});
	});

	process.on('unhandledRejection', (error) => {
		console.log(error);
		server.close(() => {
			process.exit(1);
		});
	});

	process.on('SIGTERM', () => {
		server.close(() => {
			console.log('Gracefully shutting down server 🔒');
		});
	});
}

start();
