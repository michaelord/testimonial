import React from 'react';
import {RatingProps} from '../Rating';
import {TestimonialProps} from '../Testimonial';
import {AuthorData} from 'components/people/demo';
import {Placeholder} from 'components/libs';
import {Testimonial} from '../';
import {Box, Block} from 'components/block';

import {Playground, PlaygroudCode} from 'components/styleguide';
import {Grid} from 'components/layout';

import {MediaBlock} from 'components/content';

import {Carousel} from 'components/carousel';

export const TestimonialData: TestimonialProps = {
	author: AuthorData,
	quote: `<p>${Placeholder.words(20)}</p>`,
};

export const TestimonialDemo = () => (
	<>
		<Block pad="lg" theme="light">
			<Carousel
				id="c1"
				fullwidth
				multiitem={3}
				options={{pageDots: true, prevNextButtons: true, groupCells: false, cellAlign: 'center'}}
				hasControlOverlap={false}
			>
				{[0, 1, 2, 3, 4, 5, 6].map(item => (
					<Testimonial key={item} {...TestimonialData} style="quote" />
				))}
			</Carousel>
		</Block>

		<Block pad="lg" theme="primary">
			<Carousel
				id="c2"
				fullwidth
				multiitem={3}
				options={{pageDots: true, prevNextButtons: true, groupCells: false, cellAlign: 'center'}}
				hasControlOverlap={false}
			>
				{[0, 1, 2, 3, 4, 5, 6].map(item => (
					<Box key={item}>
						<Testimonial {...TestimonialData} />
					</Box>
				))}
			</Carousel>
		</Block>

		<Block pad="lg" theme="light">
			<Carousel id="test" hasControlOverlap={false}>
				<Box>
					<Testimonial {...TestimonialData} align="center" size="lg" />
				</Box>
				<Box>
					<Testimonial {...TestimonialData} align="center" size="lg" />
				</Box>
				<Box>
					<Testimonial {...TestimonialData} align="center" size="lg" />
				</Box>
				<Box>
					<Testimonial {...TestimonialData} align="center" size="lg" />
				</Box>
			</Carousel>
		</Block>

		<Block pad="lg" theme="primary">
			<Grid>
				<Box>
					<Testimonial {...TestimonialData} />
				</Box>
				<Box>
					<Testimonial {...TestimonialData} />
				</Box>
				<Box>
					<Testimonial {...TestimonialData} />
				</Box>
			</Grid>
		</Block>

		<Block pad="lg" theme="primary">
			<MediaBlock size="md" media={Placeholder.imageObj(600)} align="middle">
				<Testimonial
					{...TestimonialData}
					size="lg"
					author={{
						name: Placeholder.name(),
						additional: Placeholder.role(),
						hasAvatar: false,
					}}
					logo={Placeholder.imageObj(130, 30)}
				/>
			</MediaBlock>
		</Block>

		<Block pad="screen" theme="dark">
			<Testimonial
				image={Placeholder.imageObj(200, 80)}
				size="lg"
				quote={`<p>Amazing experience, I love it a lot. Thanks to the team, dreams really can come true!</p>`}
				align="center"
				logo={Placeholder.imageObj(130, 30)}
				rating={{value: 3}}
				author={{
					name: Placeholder.name(),
					additional: Placeholder.role(),
				}}
			/>
		</Block>
	</>
);

export const RatingData: RatingProps = {
	value: 4,
};

export const RatingDemo = () => <div>demo</div>;
