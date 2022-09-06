import Link from 'next/link';
import { Image } from '../image';

export const NavBar = () => {
	const menus = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/#about-us',
			label: 'About Us',
		},
		{
			path: '/#solutions',
			label: 'IT Solutions',
		},
		{
			path: '/#services',
			label: 'Our Services',
		},
		{
			path: '/#customers',
			label: 'Customers',
		},
		{
			path: '/#contact-us',
			label: 'Contact Us',
		},
	];

	return (
		<>
			<div className='bg-primary'>
				<div className='container py-6'>
					<div className='flex gap-5 text-sm font-medium text-white'>
						<p>info@titafrica.tech</p>
						<p>(250) 788 312 664</p>
					</div>
				</div>
			</div>

			<nav className='sticky top-0 z-50 w-full bg-white shadow-md'>
				<div className='container py-6'>
					<div className='flex items-center justify-between'>
						<Link href='/'>
							<Image
								alt='T-IT Africa'
								src='/logo.svg'
								cover={false}
								className='h-10 w-[120px] cursor-pointer'
							/>
						</Link>

						<div className='flex gap-6'>
							{menus.map((menu, key) => (
								<Link key={key} href={menu.path}>
									<span className='hover cursor-pointer text-[15px] font-medium text-secondary hover:text-success'>
										{menu.label}
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
