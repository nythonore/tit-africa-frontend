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

export const Footer = () => {
	return (
		<footer className='bg-primary'>
			<div className='container'>
				<div className='grid grid-cols-1 gap-10 py-12 md:grid-cols-3'>
					<div>
						{/* TODO: Replace with next image component */}
						<img
							alt='TIT-Africa'
							src='http://titafrica.tech/logo/tit_bottom_logo.png'
							className='w-40'
						/>

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
									<span className='font-medium'>{contact.label}:</span>{' '}
									{contact.value}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className='text-lg font-semibold text-white'>
							Subscribe Newsletter
						</h2>

						<p className='mt-6 text-sm font-light leading-6 text-slate-300'>
							Subscribe our newsletter gor get notification about new updates.
						</p>
					</div>
				</div>

				<div className='border-t border-slate-700/90 py-6'>
					<p className='text-sm font-medium text-slate-300'>
						Copyright &copy; 2022 TIT Africa. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};