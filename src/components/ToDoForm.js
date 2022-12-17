import React, { useContext, useState } from "react";
import { ToDoContext } from "./ToDoContext";

function ToDoForm() {

    const [nuevaTareaValue, setNuevaTareaValue] = useState('')

    const {
        agregarTarea,
        setOpenModal
    } = useContext(ToDoContext)

    const onChange = (event) => {
        setNuevaTareaValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    } 

    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(nuevaTareaValue)
        setOpenModal(false)
    } 

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea 
                value={nuevaTareaValue}
                onChange={onChange}
                placeholder="Escribe tu tarea"
            />
            <div className="botones">
                <button
                    type="button"
                    className="boton-form boton-form--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="boton-form boton-form--add"
                    onClick={onSubmit}
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export default ToDoForm