import React, { useEffect, useState } from 'react';

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
			<table class='table table-striped mt-5'>
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
						<>
							<tr>
								<td scope='row'>1</td>
								<td key={todo.todo_id}>{todo.description}</td>
								<td>
									<button key={todo.todo_id}>edit</button>
								</td>
								<td>
									<button
										className='btn btn-danger'
										onClick={() =>
											handleDelete(todo.todo_id)
										}>
										Delete
									</button>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListTodos;
