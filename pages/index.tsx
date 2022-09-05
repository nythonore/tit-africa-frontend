import type { NextPage } from 'next';
import { AppLayout } from '../components/layouts';

import { About, Customer, Info } from '../components/containers';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<About />
			<Info />
			<Customer />
		</AppLayout>
	);
};

export default Home;
