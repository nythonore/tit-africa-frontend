import { useState } from 'react';

const slides = [
	{
		cover:
			'https://images.unsplash.com/photo-1662398819908-507ae18bf21f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
		component: (
			<>
				<h2 className='text-2xl font-bold text-white'>HR & Payroll Software</h2>

				<p className='mt-8 text-base font-normal leading-7 text-white md:text-lg'>
					With our HR & Payroll System, it's guaranteed to add value to HR
					functions by delivering high-quality professional practices and
					services.
				</p>

				<ul className='mt-6 list-disc space-y-3 px-3 md:px-8'>
					<li className='text-lg font-normal text-white'>
						Designed in compliance with local regulations (Rwanda labor law)
					</li>

					<li className='text-lg font-normal text-white'>
						Customizable to the in-house needs
					</li>

					<li className='text-lg font-normal text-white'>
						Automated tax declaration
					</li>

					<li className='text-lg font-normal text-white'>
						Full cycle of all HR modules
					</li>
				</ul>
			</>
		),
	},

	{
		cover:
			'https://images.unsplash.com/photo-1662398819908-507ae18bf21f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
		component: (
			<>
				<h2 className='text-2xl font-bold text-white'>
					SAVINGS GROUP (IKIMINA)
				</h2>

				<p className='mt-8 text-lg font-normal leading-7 text-white'>
					Instantly save your money with a reliable saving group "ikimina"
					anytime, anywhere. It's safe, transparent and with minimal risks. Our
					target groups include informal and corporate groups.
				</p>
			</>
		),
	},

	{
		cover:
			'https://images.unsplash.com/photo-1662398819908-507ae18bf21f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
		component: (
			<>
				<h2 className='text-2xl font-bold text-white'>Payment Gateway</h2>

				<p className='mt-8 text-lg font-normal leading-7 text-white'>
					Our payment aggregator; a convenient, low cost, flexible and secure
					way of starting or improving your eBusiness by accessing mobile and
					bank payment.
				</p>

				<p className='mt-6 text-lg font-normal leading-7 text-white'>
					If you Need to expand your business by accepting several models of
					online and debit card payments, our payment gateway is your way
					forward.
				</p>
			</>
		),
	},
];

export const Hero = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handlePrev = () => {
		if (activeSlideIndex === 0) return setActiveSlideIndex(slides.length - 1);
		return setActiveSlideIndex(prev => prev - 1);
	};

	const handleNext = () => {
		if (activeSlideIndex === slides.length - 1) return setActiveSlideIndex(0);
		return setActiveSlideIndex(prev => prev + 1);
	};

	return (
		<section id='hero'>
			<div
				className='flex h-[60vh] w-full items-center gap-2 md:gap-6'
				style={{
					background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20.83%, rgba(0, 0, 0, 0.85) 100%), url(${slides[activeSlideIndex].cover}) no-repeat`,
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			>
				<button onClick={handlePrev}>Prev</button>

				<div className='container'>
					<div className='md:w-[60%]'>{slides[activeSlideIndex].component}</div>
				</div>

				<button onClick={handleNext}>Next</button>
			</div>
		</section>
	);
};
