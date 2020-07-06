import React, { useState } from 'react';

import { SocialButtonHolder, OrLine } from './sign-up.styles';

// components
import { SignInAndSignUpContainer } from 'components/sign-in-and-sign-up-container/sign-in-and-sign-up-container.component';
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { name, email, password, confirmPassword } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<SignInAndSignUpContainer page='signUp'>
			<h1>Sign Up to Delivery App</h1>
			<SocialButtonHolder>
				<CustomButton isGoogleButton> Sign Up with Google </CustomButton>
				<CustomButton isFacebookButton> Sign Up with Facebook </CustomButton>
			</SocialButtonHolder>
			<OrLine>
				<div className='line'> </div>
				<div className='or'>Or</div>
				<div className='line'> </div>
			</OrLine>
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<FormInput
					name='name'
					type='text'
					handleChange={(e) => handleChange(e)}
					value={name}
					label='Full Name'
					id='name'
					required
				/>
				<FormInput
					name='email'
					type='email'
					handleChange={(e) => handleChange(e)}
					value={email}
					label='Email Address'
					id='email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					handleChange={(e) => handleChange(e)}
					value={password}
					label='Password'
					id='password'
					required
				/>
				<FormInput
					name='confirmPassword'
					type='password'
					handleChange={(e) => handleChange(e)}
					value={confirmPassword}
					label='Confirm Password'
					id='confirmPassword'
					required
				/>
				<CustomButton type='submit' isSubmitButton> Create new account </CustomButton>
			</form>
		</SignInAndSignUpContainer>
	);
};

export default SignUpPage;
