import React, { useState, useReducer } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/Model";
import TodoList from "./components/TodoList";

type editObj = { id: number; value: string };
export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: editObj };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return (state = [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ]);
    case "edit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.value }
          : todo
      );

    case "remove":
      return (state = state.filter((todo) => todo.id !== action.payload));
    case "done":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const todos: Todo[] = [];

  const [state, dispatch] = useReducer(TodoReducer, todos);
  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} dispatch={dispatch} />
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
