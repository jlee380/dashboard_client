import React, { useState } from 'react';

const InputTodo = () => {
	const [description, setDescription] = useState('');
	return (
		<>
			<h1 className='text-center mt-5'>Pern Todo list</h1>
			<form className='d-flex mt-5'>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Type anything'
				/>
				<button className='btn btn-success'>Add</button>
			</form>
		</>
	);
};

export default InputTodo;
