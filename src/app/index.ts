import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import preventParameterPollution from 'hpp';
import morgan from 'morgan';
import { notFoundHandler } from '../middlewares/not-found';
import { errorHandler } from '../middlewares/error-handler';
import baseRouter from '../routes';

function App() {
	const app = express();

	// middlewares
	app.set('trust proxy', true);
	app.use(cors());
	app.use(express.json({ limit: '50kb' }));
	app.use(helmet());
	app.use(preventParameterPollution());
	app.use(compression());
	app.use(morgan('dev'));
	app.use(express.urlencoded({ extended: true }));

	app.use(baseRouter);

	app.use((_, response) => {
		response.send('hello');
	});

	app.use(notFoundHandler);
	app.use(errorHandler);

	return app;
}

export default App;
