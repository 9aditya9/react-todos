import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import "./TodoList.css";
import { markAsCompleted, removeTodo } from "./actions";
import { loadTodos } from "./thunks";
// import { isLoading } from "./reducers";
const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo, i) => (
          <TodoListItem
            todo={todo}
            key={i}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markAsCompleted(text)),
  startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
