import Head from 'next/head';

export const Meta = () => {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='theme-color' content='#084D87' />

			<meta name='robots' content='index, follow' />
			<meta name='language' content='English' />

			<meta name='title' content='T-IT Africa | Way Forward' />

			<meta property='og:title' content='T-IT Africa | Way Forward' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://titafrica.tech/' />

			<meta name='twitter:card' content='summary_large_image' />

			<title>T-IT Africa | Way Forward</title>
		</Head>
	);
};
