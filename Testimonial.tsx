import {Blockquote} from 'components/editable';
import {BlockquoteBaseProps} from 'components/editable/Blockquote';
//import {Icon} from 'components/icon';
//import IconQuote from 'components/icon/quote.inline.svg';
import {getModifiers} from 'components/libs';
import {Img} from 'components/media';
import * as Types from 'components/types';
import React from 'react';
import {Rating, RatingProps} from './Rating';
import './Testimonial.scss';

export type TestimonialProps = BlockquoteBaseProps & {
	image?: Types.Image;
	align?: string;
	size?: string;
	rating?: RatingProps;
};

export const Testimonial = (props: TestimonialProps) => {
	const base: string = 'testimonial';
	const {image, align, size, rating, ...blockquote} = props;

	const atts = {
		className: getModifiers(base, {
			size,
			align: align ? `align-${align}` : null,
		}),
	};

	return (
		<div {...atts}>
			{image && (
				<div className={`${base}__image`}>
					<Img {...image} />
				</div>
			)}
			<div className={`${base}__body`}>
				<Blockquote style="none" {...blockquote} />
				{rating && <Rating {...rating} />}
			</div>
		</div>
	);
};
