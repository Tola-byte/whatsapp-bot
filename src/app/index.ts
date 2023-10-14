import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import preventParameterPollution from 'hpp';
import morgan from 'morgan';

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

	app.use((_, response) => {
		response.send('hello');
	});

	return app;
}

export default App;
