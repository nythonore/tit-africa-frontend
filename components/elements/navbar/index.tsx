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
			{/* <div className='bg-primary'>
				<div className='container py-6'>
					<div className='flex gap-5 text-sm font-medium text-white'>
						<p>info@titafrica.tech</p>
						<p>(250) 788 312 664</p>
					</div>
				</div>
			</div> */}

			<nav className='z-50 w-full bg-white shadow-md md:sticky md:top-0'>
				<div className='container py-6'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
						<Link href='/'>
							<Image
								alt='T-IT Africa'
								src='/logo.svg'
								className='h-10 w-[110px] cursor-pointer'
							/>
						</Link>

						<div className='mt-6 flex flex-wrap gap-3 md:mt-0 md:gap-6'>
							{menus.map((menu, key) => (
								<Link key={key} href={menu.path}>
									<span className='hover cursor-pointer text-[15px] font-medium text-secondary hover:text-primary'>
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
