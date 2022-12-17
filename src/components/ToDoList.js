import React from "react";

function ToDoList(props) {
    return(
        <>
            <section className="todo-list">
                <ul>
                    {props.children}
                </ul>
            </section>
        </>
    )
}

export default ToDoList