import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos = await response.json();
    console.log(todos);

    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => {
  alert(text);
};
