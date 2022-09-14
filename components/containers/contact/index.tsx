import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { LineBreaker } from '../../elements';
import config from '../../../config';

export const Contact = () => {
	const { register, handleSubmit, formState } = useForm();

	const handleSendEmail = async () => {
		Email.send({
			Host: config.MAIL_HOST,
			Username: config.MAIL_USERNAME,
			Password: config.MAIL_PASSWORD,
			To: config.MAIL_USERNAME,
			From: config.MAIL_USERNAME,
			Subject: 'This is the subject',
			Body: 'And this is the body',
		}).then((message: string) => alert(message));
	};

	return (
		<>
			<section id='contact-us' className='py-14'>
				<div className='container'>
					<div>
						<h2 className='mb-4 text-center text-3xl font-semibold text-secondary'>
							Contact Us
						</h2>

						<LineBreaker />
					</div>

					<div className='mx-auto mt-10 md:w-1/2'>
						<form onSubmit={handleSubmit(payload => handleSendEmail())}>
							<div className='space-y-5'>
								<div>
									<input
										type='text'
										placeholder='Enter your name'
										className={clsx(
											'form-control w-full rounded-md bg-[#F7FAFC]',
											formState.errors.name
												? 'border-red-600'
												: 'border-slate-300'
										)}
										{...register('name', { required: true })}
									/>

									{formState.errors.name && (
										<span className='mt-2 block text-sm font-medium text-red-600'>
											Name is required
										</span>
									)}
								</div>

								<div>
									<input
										type='email'
										placeholder='Enter your email'
										className={clsx(
											'form-control w-full rounded-md bg-[#F7FAFC]',
											formState.errors.email
												? 'border-red-600'
												: 'border-slate-300'
										)}
										{...register('email', { required: true })}
									/>

									{formState.errors.email && (
										<span className='mt-2 block text-sm font-medium text-red-600'>
											Email is required
										</span>
									)}
								</div>

								<div>
									<input
										type='text'
										placeholder='Enter your subject'
										className={clsx(
											'form-control w-full rounded-md bg-[#F7FAFC]',
											formState.errors.subject
												? 'border-red-600'
												: 'border-slate-300'
										)}
										{...register('subject', { required: true })}
									/>

									{formState.errors.subject && (
										<span className='mt-2 block text-sm font-medium text-red-600'>
											Subject is required
										</span>
									)}
								</div>

								<div>
									<textarea
										placeholder='Enter your message'
										className={clsx(
											'form-control w-full rounded-md bg-[#F7FAFC]',
											formState.errors.message
												? 'border-red-600'
												: 'border-slate-300'
										)}
										{...register('message', { required: true })}
									></textarea>

									{formState.errors.message && (
										<span className='mt-2 block text-sm font-medium text-red-600'>
											Message is required
										</span>
									)}
								</div>
							</div>

							<button
								type='button'
								onClick={handleSendEmail}
								className='btn mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-white'
							>
								<PaperAirplaneIcon className='h-5 w-5' />
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
