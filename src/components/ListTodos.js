import React, { useEffect, useState } from 'react';

import EditTodo from './EditTodo';

const ListTodos = () => {
	const [todos, setTodos] = useState([]);
	const getTodos = async () => {
		try {
			const response = await fetch('http://localhost:8001/todos');
			const jsonData = await response.json();

			setTodos(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	const handleDelete = async (id) => {
		try {
			const deleteTodo = await fetch(
				`http://localhost:8001/todos/${id}`,
				{
					method: 'DELETE',
				}
			);
			setTodos(todos.filter((todo) => todo.todo_id !== id));
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<table className='table table-striped mt-5'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Description</th>
						<th scope='col'>Edit</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => (
						<tr key={`id${todo.todo_id}`}>
							<td scope='row'>{todo.todo_id}</td>
							<td>{todo.description}</td>
							<td>
								<EditTodo todo={todo} />
							</td>
							<td>
								<button
									className='btn btn-danger'
									onClick={() => handleDelete(todo.todo_id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListTodos;
