import type { NextPage } from 'next';
import { AppLayout } from '../components/layouts';

import { Partner } from '../components/containers/partner';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<Partner />
		</AppLayout>
	);
};

export default Home;
