import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import "./TodoItem.css";
const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    const{id, text, checked} = todo;
    return <div className="TodoItem"> 
        <div className={'content ${checked ? "checked": ""}'}>
            {checked ?
             <MdCheckBox onClick={() =>
                {onCheckToggle(id)}}/>
             : <MdCheckBoxOutlineBlank onClick={() =>
                {onCheckToggle(id)}} />}
            <div className = "text"
            onClick={()=> {
                onChangeSelectedTodo(todo);
                onInsertToggle();
                }}
                > {text}</div>
        </div>
    </div>;
        
};
 //객체 구조 분해
export default TodoItem;