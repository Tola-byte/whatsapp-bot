import 'dotenv/config';
import { App } from 'embedchain';

async function LLM() {
	const llm = await App();

	return llm;
}

export default LLM;
