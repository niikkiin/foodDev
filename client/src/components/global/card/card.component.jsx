import React from 'react';

import { CardSmContainer } from './card.styles';

export const SmallCard = ({number, title, color}) => (
	<CardSmContainer color={color}>
		<div class='title'>{title}</div>
		<div class='number'>{number}</div>
	</CardSmContainer>
);
