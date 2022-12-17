import React from "react";

function ToDoItem(props) {

    return(
        <>
            <li className="todo-item">
                <span 
                    className={`icono icono-check ${props.completed && 'icono-check--active'}`}
                    onClick={props.onComplete}
                    >
                        ✓
                </span>

                <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>{props.text}</p>
                
                <span className='icono icono-delete'
                onClick={props.onDelete}
                    >
                        ⛌
                </span>
            </li>
        </>
        )
}

export default ToDoItem