import type { NextPage } from 'next';
import { AppLayout } from '../components/layouts';

import { About, Customer } from '../components/containers';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<About />
			<Customer />
		</AppLayout>
	);
};

export default Home;
