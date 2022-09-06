import { useEffect, useState } from 'react';

const slides = [
	{
		cover: '/banner/1.avif',
		component: (
			<>
				<h2 className='text-2xl font-bold text-white'>HR & Payroll Software</h2>

				<p className='mt-8 text-base font-normal leading-8 text-white'>
					With our HR & Payroll System, it&apos;s guaranteed to add value to HR
					functions by delivering high-quality professional practices and
					services.
				</p>

				<ul className='mt-6 list-disc space-y-3 px-3 text-base font-normal text-white md:px-8'>
					<li>
						Designed in compliance with local regulations (Rwanda labor law)
					</li>
					<li>Customizable to the in-house needs</li>
					<li>Automated tax declaration</li>
					<li>Full cycle of all HR modules</li>
				</ul>
			</>
		),
	},

	{
		cover: '/banner/2.avif',
		component: (
			<>
				<h2 className='text-2xl font-bold text-white'>
					SAVINGS GROUP (IKIMINA)
				</h2>

				<p className='mt-8 text-base font-normal leading-8 text-white'>
					Instantly save your money with a reliable saving group
					&quot;ikimina&quot; anytime, anywhere. It&apos;s safe, transparent and
					with minimal risks. Our target groups include informal and corporate
					groups
				</p>
			</>
		),
	},

	{
		cover: '/banner/3.avif',
		component: (
			<>
				<h2 className='text-2xl font-bold text-white'>Payment Gateway</h2>

				<p className='mt-8 text-base font-normal leading-8 text-white'>
					Our payment aggregator; a convenient, low cost, flexible and secure
					way of starting or improving your eBusiness by accessing mobile and
					bank payment.
				</p>

				<p className='mt-6 text-base font-normal leading-8 text-white'>
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
	const activeSlide = slides[activeSlideIndex];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlideIndex(prev => {
				return prev === slides.length - 1 ? 0 : prev + 1;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section id='hero'>
			<div
				className='flex min-h-[65vh] w-full transform items-center gap-2 md:gap-6'
				style={{
					background: `linear-gradient(180deg, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${activeSlide.cover}) no-repeat`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			>
				<div className='container'>
					<div className='md:w-1/2'>{activeSlide.component}</div>
				</div>
			</div>
		</section>
	);
};
