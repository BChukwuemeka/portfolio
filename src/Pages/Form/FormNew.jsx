import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import { useRef } from 'react';

const FormNew = () => {

	const form = useRef()

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [nationality, setnationality] = useState('');
	const [yourState, setYourState] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, mobileNo, nationality, yourState });

		
		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setYourState('');
		setMobileNo('');
		setnationality('');
		setError(null);
		setSuccess('Submission Successful!');
		
		emailjs.sendForm('service_9ch8ws7', 'template_3yfuna6', form.current, 'luaenmiauYr38TaPK')
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Mobile Number',
			value: mobileNo,
			onChange: (e) => setMobileNo(e.target.value),
			type: 'number',
		},
		{
			label: 'Country',
			value: nationality,
			onChange: (e) => setnationality(e.target.value),
			type: 'text',
		},
		{
			label: 'State',
			value: yourState,
			onChange: (e) => setYourState(e.target.value),
			type: 'text',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>I'm New Here</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Submit Form</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default FormNew;
