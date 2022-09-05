import {
	CircleStackIcon,
	TableCellsIcon,
	ReceiptPercentIcon,
	DevicePhoneMobileIcon,
	DocumentIcon,
	GlobeAltIcon,
} from '@heroicons/react/24/outline';

const process = [
	{
		icon: <CircleStackIcon className='mx-auto h-10 w-10 text-success' />,
		label: 'Products & Processes',
	},
	{
		icon: <TableCellsIcon className='mx-auto h-10 w-10 text-success' />,
		label: 'Request A Demo',
	},
	{
		icon: <ReceiptPercentIcon className='mx-auto h-10 w-10 text-success' />,
		label: 'Request A Qoute',
	},
	{
		icon: <DevicePhoneMobileIcon className='mx-auto h-10 w-10 text-success' />,
		label: 'Give Us A Call',
	},
	{
		icon: <DocumentIcon className='mx-auto h-10 w-10 text-success' />,
		label: 'Our Brand Manual',
	},
	{
		icon: <GlobeAltIcon className='mx-auto h-10 w-10 text-success' />,
		label: 'Company Profile',
	},
];

export const About = () => {
	return (
		<section id='about-us' className='py-16'>
			<div className='container'>
				<div className='flex flex-col gap-12 md:flex-row md:items-center'>
					<div className='basis-1/2'>
						<p className='text-base uppercase text-success'>About Us</p>

						<h2 className='mt-3 text-4xl font-medium'>
							Welcome To T-IT Africa
						</h2>

						<p className='my-8 text-xl leading-9 text-slate-800 md:my-12'>
							T-IT AFRICA finds its root in CODISYS that operated in Rwanda from
							2003 to 2009. The first carried out 70% of activities and
							contracts in the area of Software Development, Software Support,
							Training and Skills Transfer.
						</p>

						<p className='text-lg font-medium text-slate-800'>
							Manager: <span className='text-success'>Michen Taylor</span>
						</p>
					</div>

					<div className='flex basis-1/2 gap-3'>
						<div className='w-1/2 space-y-3'>
							<div className='h-40 w-full cursor-pointer overflow-hidden rounded-md md:h-52'>
								<img
									alt=''
									src='https://preview.colorlib.com/theme/roberto/img/bg-img/x13.jpg.pagespeed.ic.CSN0p413eV.webp'
									className='hover h-full w-full rounded-md object-cover hover:scale-110'
								/>
							</div>

							<div className='h-40 w-full cursor-pointer overflow-hidden rounded-md md:h-52'>
								<img
									alt=''
									src='https://preview.colorlib.com/theme/roberto/img/bg-img/x14.jpg.pagespeed.ic.thL2W_FV3m.webp'
									className='hover h-full w-full rounded-md object-cover hover:scale-110'
								/>
							</div>
						</div>

						<div className='min-h-full w-1/2 cursor-pointer overflow-hidden'>
							<img
								alt=''
								src='https://preview.colorlib.com/theme/roberto/img/bg-img/x15.jpg.pagespeed.ic.oqkgdxQkRv.webp'
								className='hover h-full w-full rounded-md object-cover hover:scale-110'
							/>
						</div>
					</div>
				</div>

				<div className='mt-14 grid grid-cols-2 gap-5 md:grid-cols-6'>
					{process.map((process, key) => (
						<div
							key={key}
							className='process-card-shadow group cursor-pointer bg-white px-2 py-6'
						>
							{process.icon}

							<p className='hover mt-5 text-center text-sm font-semibold text-slate-800 group-hover:text-success'>
								{process.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
