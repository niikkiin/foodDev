import React from 'react';

import { Wrapper } from './sign-in-and-sign-up-container.styles';

// svg imports
import { ReactComponent as DeliveryGuy } from 'assets/signUpSVG.svg';
import { ReactComponent as GirlInSofa } from 'assets/signInSVG.svg';

export const SignInAndSignUpContainer = ({ children, page }) => {
	const setSVG = () => {
		if (page === 'signUp') {
			return <DeliveryGuy className='svg-items delivery-guy' />;
		} else if (page === 'signIn') {
			return <GirlInSofa className='svg-items girl-in-sofa' />;
		}
	};
	return (
		<Wrapper>
			<div className='svg'>{setSVG()}</div>
			<div className='content'>{children}</div>
		</Wrapper>
	);
};
