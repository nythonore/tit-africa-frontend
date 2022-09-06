import { CheckBadgeIcon } from '@heroicons/react/24/outline';

type CardProps = {
	title: string;
	data: string[];
};

export const Card = (props: CardProps) => {
	const { title, data } = props;

	return (
		<div className='border border-slate-200 px-5 py-6'>
			<h2 className='text-[15px] font-bold uppercase text-secondary'>
				{title}
			</h2>

			<ul className='mt-3 divide-y divide-slate-200'>
				{data.map((value, key) => (
					<li key={key} className='flex gap-2 py-3'>
						<CheckBadgeIcon className='h-5 w-5 text-primary' />
						<span className='text-sm text-slate-600'>{value}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
