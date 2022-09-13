import clsx from 'clsx';
import NextImage from 'next/image';

type ImageProps = {
	alt?: string;
	src: string;
	className?: string;
};

export const Image = (props: ImageProps) => {
	const { alt, src, className } = props;
	return <img alt={alt ?? src} src={src} className={className} />;
};
