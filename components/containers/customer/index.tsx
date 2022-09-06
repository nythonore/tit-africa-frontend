import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { Image } from '../../elements';

const customers = [
	'/customer/1.jpeg',
	'/customer/2.png',
	'/customer/3.jpeg',
	'/customer/4.png',
	'/customer/5.jpeg',
	'/customer/6.png',
	'/customer/7.png',
	'/customer/8.jpeg',
	'/customer/9.png',
	'/customer/10.jpeg',
	'/customer/11.png',
];

export const Customer = () => {
	const handleScrollLeft = () => {
		const slider = document.getElementById('customer-slider');
		if (slider) slider.scrollLeft = slider.scrollLeft - 180;
	};

	const handleScrollRight = () => {
		const slider = document.getElementById('customer-slider');
		if (slider) slider.scrollLeft = slider.scrollLeft + 180;
	};

	return (
		<section id='customers' className='py-6'>
			<div className='container flex items-center gap-5 md:gap-10'>
				<div>
					<button onClick={handleScrollLeft}>
						<ChevronDoubleLeftIcon className='h-5 w-5 md:h-7 md:w-7' />
					</button>
				</div>

				<div
					id='customer-slider'
					className='flex grow flex-nowrap gap-6 overflow-hidden scroll-smooth md:gap-10'
				>
					{customers.map((customer, key) => (
						<div
							key={key}
							className='h-[130px] w-[130px] flex-shrink-0 p-4 md:p-6'
						>
							<Image
								alt={customer}
								src={customer}
								cover={false}
								className='h-full w-full'
							/>
						</div>
					))}
				</div>

				<div>
					<button onClick={handleScrollRight}>
						<ChevronDoubleRightIcon className='h-5 w-5 md:h-7 md:w-7' />
					</button>
				</div>
			</div>
		</section>
	);
};
