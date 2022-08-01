import React, { useState, useRef, useEffect, useReducer } from "react";
import { Todo } from "./Model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Actions } from "../App";

type Props = {
  todos: Todo[];
  todo: Todo;
  dispatch: React.Dispatch<Actions>;
};

const SingleTodo = ({ todo, todos, dispatch }: Props) => {
  // setTodos(todos.filter((todo) => todo.id !== id));

  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id: todo.id, value: editText } });

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todo-single--text">{todo.todo}</s>
      ) : (
        <span className="todo-single--text">{todo.todo}</span>
      )}
      <div className="icon-div">
        <span
          className="todos__single--icon"
          onClick={() => dispatch({ type: "remove", payload: todo.id })}
        >
          {" "}
          <AiFillDelete />
        </span>
        <span
          className="todos__single--icon"
          onClick={() => (!edit && !todo.isDone ? setEdit(!edit) : "")}
        >
          <AiFillEdit />
        </span>
        <span
          className="todos__single--icon"
          onClick={() => dispatch({ type: "done", payload: todo.id })}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
