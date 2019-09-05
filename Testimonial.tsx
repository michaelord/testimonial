import * as React from 'react';

import './Testimonial.scss';

import {RichText} from 'components/editable';

import {Author} from 'components/people';

import {getModifiers} from 'components/libs';

import {Img, ImgProps} from 'components/editable';

import IconQuote from 'components/icon/quote.inline.svg';

type TestimonialProps = {
	image?: ImgProps;
	align?: string;
	hasAvatar?: boolean;
	quote: string;
	size?: string;
	name: string;
	position: string;
};

export const Testimonial = (props: TestimonialProps) => {
	const base: string = 'testimonial';

	const {quote, align, hasAvatar = true, size = 'default', image, name, position} = props;

	const atts = {
		className: getModifiers(base, {
			size,
			align: `align-${align}`,
		}),
	};

	return (
		<div {...atts}>
			{image ? (
				<div className={`${base}__logo`}>
					<Img {...image} />
				</div>
			) : (
				<span className={`${base}__icon`}>
					<IconQuote className="icon" />
				</span>
			)}
			<div className={`${base}__body`}>
				<RichText content={quote} />
			</div>
			<footer>
				<Author name={name} position={position} hasAvatar={hasAvatar} />
			</footer>
		</div>
	);
};
