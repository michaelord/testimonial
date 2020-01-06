import {Icon} from 'components/icon';
import IconStar from 'components/icon/star.inline.svg';
import React from 'react';
import './Rating.scss';

import * as Types from 'components/types';

export type RatingProps = {
	value: number;
	total?: number;
};

export const Rating = (props: RatingProps) => {
	const base: string = 'rating';

	const {value, total = 5} = props;

	const stars = [...Array(total)];

	return (
		<div className={base}>
			{stars.map((item: any, index) => (
				<Icon icon={IconStar} key={`r-${index}`} />
			))}

			<span className={`${base}__score`}>
				{value} / {total}
			</span>
		</div>
	);
};
