import { ReactNode } from 'react';
import { NavBar, Footer } from '../elements';

type AppLayoutProps = {
	children: ReactNode;
};

export const AppLayout = (props: AppLayoutProps) => {
	const { children } = props;

	return (
		<>
			<NavBar />

			<main>{children}</main>

			<Footer />
		</>
	);
};
