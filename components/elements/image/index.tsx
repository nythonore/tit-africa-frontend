import clsx from 'clsx';
import NextImage from 'next/image';

type ImageProps = {
	alt?: string;
	src: string;
	cover?: boolean;
	className?: string;
};

export const Image = (props: ImageProps) => {
	const { alt, src, cover = true, className } = props;

	return (
		<div className={clsx('relative w-auto', className)}>
			<NextImage
				alt={alt ?? src}
				src={src}
				layout='fill'
				className={clsx(cover ? 'object-cover' : '')}
			/>
		</div>
	);
};
