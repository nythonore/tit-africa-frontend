import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { LineBreaker } from '../../elements';

export const Contact = () => {
	return (
		<section id='contact-us' className='py-14'>
			<div className='container'>
				<div>
					<h2 className='mb-4 text-center text-3xl font-semibold text-secondary'>
						Contact Us
					</h2>

					<LineBreaker />
				</div>

				<div className='mx-auto mt-10 w-1/2'>
					<form>
						<div className='space-y-5'>
							<input
								type='text'
								placeholder='Enter your name'
								className='form-control w-full rounded-md border-slate-300 bg-[#F7FAFC]'
							/>

							<input
								type='email'
								placeholder='Enter your email'
								className='form-control w-full rounded-md border-slate-300 bg-[#F7FAFC]'
							/>

							<input
								type='text'
								placeholder='Enter your subject'
								className='form-control w-full rounded-md border-slate-300 bg-[#F7FAFC]'
							/>

							<textarea
								placeholder='Enter your message'
								className='form-control h-32 w-full resize-none rounded-md border-slate-300 bg-[#F7FAFC] py-3'
							></textarea>
						</div>

						<button
							type='button'
							className='btn mt-7 h-12 w-full flex items-center justify-center gap-2 rounded-md bg-primary text-white'
						>
							<PaperAirplaneIcon className='h-5 w-5' />
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
