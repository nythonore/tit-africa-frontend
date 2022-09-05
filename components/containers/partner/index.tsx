import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

const partners = [
	'http://titafrica.tech/img/image--077.jpg',
	'http://titafrica.tech/img/image--068.png',
	'http://titafrica.tech/img/image--070.jpg',
	'http://titafrica.tech/img/image--071.png',
	'http://titafrica.tech/img/image--075.jpg',
	'http://titafrica.tech/img/image--060.png',
	'http://titafrica.tech/img/image--080.png',
	'http://titafrica.tech/img/image--079.jpg',
	'http://titafrica.tech/img/image--066.png',
	'http://titafrica.tech/img/image--062.jpg',
	'http://titafrica.tech/img/image--064.png',
];

export const Partner = () => {
	const handleScrollLeft = () => {
		const slider = document.getElementById('partner-slider');
		if (slider) slider.scrollLeft = slider.scrollLeft - 180;
	};

	const handleScrollRight = () => {
		const slider = document.getElementById('partner-slider');
		if (slider) slider.scrollLeft = slider.scrollLeft + 180;
	};

	return (
		<section id='partner' className='py-10'>
			<div className='container flex items-center gap-5 md:gap-10'>
				<div>
					<button onClick={handleScrollLeft}>
						<ChevronDoubleLeftIcon className='h-5 w-5 md:h-7 md:w-7' />
					</button>
				</div>

				<div
					id='partner-slider'
					className='flex grow flex-nowrap gap-6 overflow-hidden scroll-smooth md:gap-10'
				>
					{partners.map((partner, key) => (
						<div
							key={key}
							className='h-[130px] w-[130px] flex-shrink-0 p-4 md:p-6'
						>
							{/* TODO: Replace with next image component */}
							<img
								alt={partner}
								src={partner}
								className='h-full w-full object-contain'
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
