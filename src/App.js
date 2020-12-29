import React from 'react';
import './App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Register from './components/Register';

function App() {
	return (
		<>
			<div className='container'>
				<Register />
				{/* <InputTodo />
				<ListTodos /> */}
			</div>
		</>
	);
}

export default App;
