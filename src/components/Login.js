import React from 'react';

const Login = () => {
	return (
		<>
			<h1>Login</h1>
			<form className='mt-5'>
				<div class='form-group'>
					<input
						type='email'
						class='form-control'
						placeholder='Enter email'
						id='email'></input>
				</div>
				<div class='form-group'>
					<input
						type='password'
						class='form-control'
						placeholder='Enter password'
						id='pwd'
					/>
				</div>
				{/* <div class='form-group form-check'>
					<label class='form-check-label'>
						<input class='form-check-input' type='checkbox' />{' '}
						Remember me
					</label>
				</div> */}
				<button type='submit' class='btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
};

export default Login;
