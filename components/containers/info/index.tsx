const data = [
	{
		title: 'Our Vision',
		desc: 'Our vision is to provide and become a leading local and regional company of excellence in providing high quality IT solutions and Service Management, keeping customer centricity our top priority.',
	},
	{
		title: 'Our Mission',
		desc: 'Our mission is to take advantage of our broad IT experience to deliver tangible business results enabling our clients in industry and government to profit from the advanced use of technology.',
	},
	{
		title: 'Our Values',
		desc: 'Quality – we do the right thing right. Leadership – we shape a better future. Integrity – we really mean what we say. Collaboration – we leverage collective genius. Innovation – we enhance and create new things.',
	},
];

export const Info = () => {
	return (
		<section id='info'>
			<div className='flex flex-col md:flex-row'>
				<div className='hidden basis-1/2 bg-[url(/banner/2.avif)] bg-cover bg-center bg-no-repeat md:block'></div>

				<div className='basis-1/2 bg-primary py-16'>
					<div className='container'>
						<div className='space-y-12'>
							{data.map((value, key) => (
								<div key={key}>
									<h2 className='text-2xl font-medium text-white'>
										{value.title}
									</h2>

									<p className='mt-4 text-base font-light leading-8 text-slate-300'>
										{value.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
