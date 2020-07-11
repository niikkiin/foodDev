import React from 'react';

import { CardSmContainer, CardContainer } from './card.styles';

export const SmallCard = ({number, title, color}) => (
	<CardSmContainer color={color}>
		<div class='title'>{title}</div>
		<div class='number'>{number}</div>
	</CardSmContainer>
);

const Card = ({ children, title }) => (
  <CardContainer>
    <div className="title">
      {title}
    </div>
    <div className="content">
      {children}
    </div>
  </CardContainer>
);

export default Card;