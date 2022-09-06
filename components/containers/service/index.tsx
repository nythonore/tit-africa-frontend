import { Card, LineBreaker } from '../../elements';

const data = [
	{
		title: 'Service Category',
		data: [
			'Business Analysis.',
			'Business Intelligence.',
			'Software Development & Engineering.',
			'Database Administration.',
			'Network Design & Administration.',
			'IT Audit & IT Security based on ISO27000.',
			'Process Documentation & ITIL implementation.',
		],
	},
	{
		title: 'Area / Sector',
		data: [
			'Requirements gathering, elicitation & Documentation.',
			'Reporting process design & implementation.',
			'Analysis, Design, Implementation of IT System.',
			'Review, Documentation, Design of Computer Networks.',
			'Gap analysis, Design & Development of Information',
			'(Cyber) Security Policies, Processes & Procedures.',
			'Service oriented and Quality Management process design and development.',
		],
	},
];

export const Service = () => {
	return (
		<section id='services' className='py-14'>
			<div className='container'>
				<div>
					<h2 className='mb-4 text-center text-2xl font-semibold text-primary'>
						Our Services
					</h2>

					<LineBreaker />
				</div>

				<div className='mx-auto mt-10 grid grid-cols-1 md:w-4/5 md:grid-cols-2'>
					{data.map((element, key) => (
						<Card key={key} {...element} />
					))}
				</div>
			</div>
		</section>
	);
};
