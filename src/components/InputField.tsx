import React from "react";
import "./styles.css";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}: Props) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
