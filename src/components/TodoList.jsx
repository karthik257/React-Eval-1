import React from 'react';
import styles from "./Todo.module.css"


const TodoList = ({todos,handleCheckbox,handleDelete }) => {
    return (
        <ul>
            {todos.map((element,ind) => {
                return <li key={ind}>
                    <input type="checkbox" onClick={handleCheckbox} className={styles.chk }/>
                    <span>{element}</span>
                    <button onClick={handleDelete} className={styles.btn }>Delete</button>
                </li>
             }) }
        </ul>
    )
}

export default TodoList;
