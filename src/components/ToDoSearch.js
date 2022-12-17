import React, { useContext } from "react";
import { ToDoContext } from "./ToDoContext";

function ToDoSearch() {

    const {searchValue, setSearchValue} = useContext(ToDoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return [
        <>
            <input 
                className="todo-search" 
                placeholder="Escribe una tarea"
                value={searchValue}
                onChange={onSearchValueChange}
                />
        </>
    ]
}

export default ToDoSearch