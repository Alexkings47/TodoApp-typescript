import React from "react";
import { Todo } from "./Model";
import "./styles.css";
import SingleTodo from "./SingleTodo";
import { Actions } from "../App";

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;
