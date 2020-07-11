import React from 'react';

import { CardSmContainer } from './card.styles';

export const SmallCard = ({number, title}) => (
	<CardSmContainer>
		<div class='overviewcard__icon'>{title}</div>
		<div class='overviewcard__info'>{number}</div>
	</CardSmContainer>
);
