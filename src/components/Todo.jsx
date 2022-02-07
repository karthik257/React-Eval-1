import React, { useState } from 'react';
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import styles from "./Todo.module.css"



function Todo() {

    const [value,setValue] = useState("")
    const [todos, setTodos] = useState([])

    const handleTodo = () => {
        if (value !== "") {
            setTodos([...todos, value])
            setValue("")
        }
    }

const handleCheckbox = (e) => {
        if (e.currentTarget.checked) {
            let isChecked = e.currentTarget.nextElementSibling;
            isChecked.style.textDecoration = "line-through";
            isChecked.style.color = "green";

        } else {
            let isChecked = e.currentTarget.nextElementSibling;
            isChecked.style.textDecoration = "none";
            isChecked.style.color = "black";
        }
        
    }

    const handleDelete = (e) => {
        e.currentTarget.parentNode.remove()
    }

 

    return (<div>

        <TodoInput value={value} onChange={(e) => {setValue(e.currentTarget.value)} }/>

        <button onClick={handleTodo} className={styles.btn } >+</button>
        <TodoList todos={todos} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
        
        
  </div>);
}






export default Todo;
