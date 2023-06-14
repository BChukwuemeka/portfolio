import React, { useState } from 'react';
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

const FormGive = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [amount, setAmount] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, mobileNo, amount });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setMobileNo('');
		setAmount('');
		setError(null);
		setSuccess('Application was submitted!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Mobile No',
			value: mobileNo,
			onChange: (e) => setMobileNo(e.target.value),
			type: 'number',
		},
		{
			label: 'Amount Given',
			value: amount,
			onChange: (e) => setAmount(e.target.value),
			type: 'number',
		},
	];
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>When you give, Love multiplies</FormTitle>
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

							<FormButton type="submit">Give</FormButton>
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

export default FormGive;
