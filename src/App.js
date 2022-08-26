import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { addTodo, removeTodo } from "./todoSlice";

export default function App() {
  const [input, setInput] = useState("");
  const allTodos = useSelector((state) => state.value.todoArr);
  console.log(allTodos);

  const dispatch = useDispatch();
  function addHandler() {
    const obj = {
      id: nanoid(),
      value: input
    };
    dispatch(addTodo(obj));
    setInput("");
  }
  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addHandler}>Add Todo</button>
      {allTodos
        ? allTodos.map((eachTodo) => {
            return (
              <div key={eachTodo.id}>
                <h1>{eachTodo.value}</h1>
                <button onClick={() => deleteHandler(eachTodo.id)}>
                  remove
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
}
