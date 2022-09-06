import { Card, LineBreaker } from '../../elements';

const data = [
	{
		title: 'Product Name',
		data: [
			'Membership Management System (USSD??)',
			'Monitoring & Reporting Web Application',
			'Change Declaration System',
			'Child Labor Monitoring System',
			'Information exchange & dialogue System',
			'Appointment Scheduling & Booking System',
			'Solar Energy Mobi-Payment System',
			'Customer Registration System',
			'BI System',
			'Loan & Risk Management System',
			'Financial Management Software',
			'HR & Payroll Software',
			'Payment Gateway',
		],
	},
	{
		title: 'Interface',
		data: ['USSD / WEB', 'WEB / SMS', 'WEB', 'USSD', 'MOBILE', 'API'],
	},
	{
		title: 'Area / Sector',
		data: [
			'Public Institution',
			'Agriculture',
			'Banking',
			'NGO',
			'Hospital',
			'MNO',
			'Public / Private institutions and NGO',
			'E-commerce',
		],
	},
];

export const Solution = () => {
	return (
		<section id='solutions' className='py-14'>
			<div className='container'>
				<div>
					<h2 className='mb-4 text-center text-3xl font-semibold text-primary'>
						IT Solutions
					</h2>

					<LineBreaker />
				</div>

				<div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
					{data.map((element, key) => (
						<Card key={key} {...element} />
					))}
				</div>
			</div>
		</section>
	);
};
