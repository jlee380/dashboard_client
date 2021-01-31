import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
