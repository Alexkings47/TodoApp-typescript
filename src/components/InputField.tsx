import React, { useRef } from "react";
import "./styles.css";
import {Actions} from "../App"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<Actions>;
}

const InputField: React.FC<Props> = ({ todo, setTodo, dispatch}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <form onSubmit={(e)=> {
      dispatch({type:"add", payload: todo});
      e.preventDefault();
      setTodo("");
      inputRef.current?.blur();
    }}>
      <input
        type="text"
        ref= {inputRef}
        placeholder="Enter a text"
        value={todo}
        className="inputTodo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
