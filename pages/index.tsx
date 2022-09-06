import type { NextPage } from 'next';
import { AppLayout } from '../components/layouts';

import {
	About,
	Customer,
	Hero,
	Info,
	Service,
	Solution,
} from '../components/containers';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<Hero />
			<About />
			<Info />
			<Solution />
			<Service />
			<Customer />
		</AppLayout>
	);
};

export default Home;
