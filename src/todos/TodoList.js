import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm'
import { connect } from "react-redux";
import './TodoList.css'
import { removeTodo } from './actions';
const TodoList = ({ todos = [], onRemovePressed }) => {
	return (
		<div className="list-wrapper">
			<NewTodoForm />
			{todos.map((todo, i) => <TodoListItem todo={todo} key={i} onRemovePressed={onRemovePressed} />)}			
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);