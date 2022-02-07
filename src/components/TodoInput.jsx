import React from 'react';
import styles from "./TodoInput.module.css"

const TodoInput = ({value,onChange }) => {
    return (
        <input type="text" value={value} onChange={onChange} className={styles.inputstyle} placeholder="Enter item"/>
    )
}


export default TodoInput;
