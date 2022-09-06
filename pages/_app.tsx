import type { AppProps } from 'next/app';
import { Meta } from '../components/elements';
import '../styles/globals.css';

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	);
};

export default App;
