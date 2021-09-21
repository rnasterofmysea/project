import React, { useState, useEffect } from "react";
import { MdAddCircle} from "react-icons/md";
import{ TiPencil, TiTrash } from "react-icons/ti"
import "./TodoInsert.css";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo
}) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() =>{
    if(selectedTodo){
        setValue(selectedTodo.text)
    }
    } , [selectedTodo]
    //이 부분 잘 모르겠음 , 인자들의 의존성이 ㅜ머야?
    );
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></input>
          {selectedTodo ? (
            <div className="rewrite">
                <TiPencil />
                <TiTrash /></div>
            ): (
          <button type="submit">
            <MdAddCircle />
          </button>
          )}
      </form>
    </div>
  );
};

export default TodoInsert;