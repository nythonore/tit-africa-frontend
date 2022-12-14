import {
	CircleStackIcon,
	TableCellsIcon,
	ReceiptPercentIcon,
	DevicePhoneMobileIcon,
	DocumentIcon,
	GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Image } from '../../elements';

const process = [
	{
		icon: <CircleStackIcon className='mx-auto h-10 w-10 text-primary' />,
		label: 'Products & Processes',
	},
	{
		icon: <TableCellsIcon className='mx-auto h-10 w-10 text-primary' />,
		label: 'Request A Demo',
	},
	{
		icon: <ReceiptPercentIcon className='mx-auto h-10 w-10 text-primary' />,
		label: 'Request A Qoute',
	},
	{
		icon: <DevicePhoneMobileIcon className='mx-auto h-10 w-10 text-primary' />,
		label: 'Give Us A Call',
	},
	{
		icon: <DocumentIcon className='mx-auto h-10 w-10 text-primary' />,
		label: 'Our Brand Manual',
	},
	{
		icon: <GlobeAltIcon className='mx-auto h-10 w-10 text-primary' />,
		label: 'Company Profile',
	},
];

export const About = () => {
	return (
		<section id='about-us' className='py-14'>
			<div className='container'>
				<div className='flex flex-col gap-12 md:flex-row md:items-center'>
					<div className='basis-1/2'>
						<p className='text-base uppercase text-primary'>About Us</p>

						<h2 className='mt-2 text-4xl font-semibold text-secondary'>
							Welcome To T-IT Africa
						</h2>

						<p className='my-8 text-xl leading-8 text-slate-800 md:my-12'>
							T-IT AFRICA finds its root in CODISYS that operated in Rwanda from
							2003 to 2009. The first carried out 70% of activities and
							contracts in the area of Software Development, Software Support,
							Training and Skills Transfer.
						</p>

						<p className='text-lg font-medium text-slate-800'>
							Manager: <span className='text-primary'>Michen Taylor</span>
						</p>
					</div>

					<div className='flex basis-1/2 gap-3'>
						<div className='w-1/2 space-y-3'>
							<div className='h-40 w-full overflow-hidden rounded-md md:h-52'>
								<Image
									alt='banner 1'
									src='/banner/1.avif'
									className='hover h-full w-full rounded-md object-cover hover:scale-110'
								/>
							</div>

							<div className='h-40 w-full overflow-hidden rounded-md md:h-52'>
								<Image
									alt='banner 2'
									src='/banner/2.avif'
									className='hover h-full w-full rounded-md object-cover hover:scale-110'
								/>
							</div>
						</div>

						<div className='min-h-full w-1/2 overflow-hidden'>
							<Image
								alt='banner 3'
								src='/banner/3.avif'
								className='hover h-full w-full rounded-md object-cover hover:scale-110'
							/>
						</div>
					</div>
				</div>

				<div className='mt-12'>
					<div className='grid grid-cols-2 gap-5 md:grid-cols-6'>
						{process.map((process, key) => (
							<Link key={key} href='/#contact-us'>
								<div className='card-shadow group z-10 cursor-pointer bg-white px-2 py-6'>
									{process.icon}

									<p className='hover mt-5 text-center text-sm font-bold text-slate-800 group-hover:text-primary'>
										{process.label}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
