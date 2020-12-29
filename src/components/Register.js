import React, { useState } from 'react';

import '../style.css';

const Register = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const error = [];

		if (!firstname) {
			error.push('firstname');
		}
		if (!lastname) {
			error.push('lastname');
		}

		const expression = /\S+@\S+/;
		var validEmail = expression.test(String(email).toLowerCase());
		console.log(validEmail);

		if (!validEmail || !email) {
			error.push('email');
		}

		if (!password) {
			error.push('password');
		}
		if (!cpassword) {
			error.push('cpassword');
		}

		if (password !== cpassword) {
			error.push('password');
			error.push('cpassword');
		}

		setErrors(error);
		console.log(errors);
	};

	const handleError = (key) => {
		return errors.indexOf(key) !== -1;
	};

	return (
		<>
			<h1>Register</h1>
			<form className='mt-5'>
				<div className='form-row'>
					<div className='col'>
						<input
							type='text'
							className={
								handleError('firstname')
									? 'form-control is-invalid'
									: 'form-control'
							}
							id='firstname'
							placeholder='First name'
							name='firstname'
							onChange={(e) => setFirstname(e.target.value)}
							required
						/>
						<ErrorMsg value='firstname' handleError={handleError} />
					</div>
					<div className='col'>
						<input
							type='text'
							className={
								handleError('lastname')
									? 'form-control is-invalid'
									: 'form-control'
							}
							id='lastname'
							placeholder='Last name'
							name='lastname'
							onChange={(e) => setLastname(e.target.value)}
							required
						/>
						<ErrorMsg value='lastname' handleError={handleError} />
					</div>
				</div>
				<div style={{ marginBottom: 15 }}></div>
				<div className='form-group'>
					<input
						type='email'
						className={
							handleError('email')
								? 'form-control is-invalid'
								: 'form-control'
						}
						placeholder='Enter email'
						id='email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<ErrorMsg value='email' handleError={handleError} />
				</div>
				<div className='form-group'>
					<input
						type='password'
						className={
							handleError('password')
								? 'form-control is-invalid'
								: 'form-control'
						}
						placeholder='Enter password'
						id='password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<ErrorMsg value='password' handleError={handleError} />
				</div>
				<div className='form-group'>
					<input
						type='password'
						className={
							handleError('cpassword')
								? 'form-control is-invalid'
								: 'form-control'
						}
						placeholder='Confirm password'
						id='cpassword'
						name='cpassword'
						onChange={(e) => setCpassword(e.target.value)}
						required
					/>
					<ErrorMsg value='cpassword' handleError={handleError} />
				</div>
				{/* <div className='form-group form-check'>
					<label className='form-check-label'>
						<input className='form-check-input' type='checkbox' />{' '}
						Remember me
					</label>
				</div> */}
				<button
					type='submit'
					className='btn btn-primary'
					onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</>
	);
};

const ErrorMsg = ({ handleError, value }) => {
	return (
		<div className={handleError(value) ? 'inline-errormsg' : 'hidden'}>
			Please check again
		</div>
	);
};

export default Register;
