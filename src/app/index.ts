import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import preventParameterPollution from 'hpp';

function App() {
	const app = express();

	// middlewares
	app.use(cors());
	app.use(express.json({ limit: '50kb' }));
	app.use(helmet());
	app.use(preventParameterPollution());
	app.use(compression());

	return app;
}

export default App;
