import React, { useContext } from "react";
import { ToDoContext } from "./ToDoContext";

function ToDoCounter() {

    const {totalTareas, tareasCompletadas} = useContext(ToDoContext)
    return(
        <>
            <div className="todo-counter">
                <h2>Has completado {tareasCompletadas} de {totalTareas} tareas pendientes</h2>
            </div>
        </>
    )
}

export default ToDoCounter