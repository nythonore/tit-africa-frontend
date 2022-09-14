import { Image } from '../image';

export const Footer = () => {
	const contacts = [
		{
			label: 'Address',
			value:
				'Kimihurura, Kigali Heights Building, 5th Floor, KG 7 Street, Kigali, Rwanda.',
		},
		{
			label: 'Email',
			value: 'info@titafrica.tech',
		},
		{
			label: 'Support line',
			value: '(+250)-788-312-664',
		},
	];

	const socials = [
		{
			icon: 'bi bi-meta',
			link: '#',
		},
		{
			icon: 'bi bi-twitter',
			link: '#',
		},
		{
			icon: 'bi bi-instagram',
			link: '#',
		},
		{
			icon: 'bi bi-google',
			link: '#',
		},
		{
			icon: 'bi bi-linkedin',
			link: '#',
		},
	];

	return (
		<footer className='bg-primary'>
			<div className='container'>
				<div className='grid grid-cols-1 gap-10 py-12 md:grid-cols-3'>
					<div>
						<div>
							<Image
								alt='T-IT Africa'
								src='/logo-white.png'
								className='h-12 w-[120px]'
							/>
						</div>

						<p className='mt-6 text-sm font-light leading-6 text-slate-300'>
							T-IT AFRICA finds its root in CODISYS that operated in Rwanda from
							2003 to 2009. The first carried out 70% of activities and
							contracts in the area of Software Development, Software Support,
							Training and Skills Transfer.
						</p>
					</div>

					<div>
						<h2 className='text-lg font-semibold text-white'>
							Contact Details
						</h2>

						<ul className='mt-6 space-y-3'>
							{contacts.map((contact, key) => (
								<li
									key={key}
									className='text-sm font-light leading-6 text-slate-300'
								>
									<span className='font-bold'>{contact.label}:</span>{' '}
									{contact.value}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className='text-lg font-semibold text-white'>
							Follow Us On Social
						</h2>

						<ul className='mt-6 flex gap-3'>
							{socials.map((social, key) => (
								<a
									key={key}
									href={social.link}
									target='_blank'
									rel='noreferrer'
									className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 text-sm text-slate-300'
								>
									<i className={social.icon}></i>
								</a>
							))}
						</ul>
					</div>
				</div>

				<div className='border-t border-slate-500/90 py-6'>
					<p className='text-sm font-medium text-slate-300'>
						Copyright &copy; 2022 TIT Africa. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};
