import React, { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const ToDoContext = createContext()

function ToDoProvider(props) {

    const {
        item, 
        guardarItem, 
        loading,
        error
      } = useLocalStorage('tareas_v1', [])
      // ejemplo con un nombre ---> const [nombre, guardarNombre] = useLocalStorage('nombres', '')
    
      /* Estado inicial de nuestra busqueda */
      const [searchValue, setSearchValue] = useState('')
      const [openModal, setOpenModal] = useState(false)
    
      /* Contador de tareas completadas/totales */
      const tareasCompletadas = item.filter(tarea => !!tarea.completed).length
      const totalTareas = item.length
    
      /* Variable para guardar las coincidencias de la busqueda */
      let listaDeItembuscados = []
    
      /* Logica para filtrar */
      if (!searchValue.length >= 1) {
        listaDeItembuscados = item
      } else {
        listaDeItembuscados = item.filter(todo => {
          const tituloTarea = todo.text.toLowerCase()
          const tareaBuscada = searchValue.toLowerCase()
          return tituloTarea.includes(tareaBuscada)
        })
      }

    /* Agregar Tarea */

    const agregarTarea = (text) => {
        const nuevoItem = [...item]
        nuevoItem.push({
            text,
            completed: false
        })
        guardarItem(nuevoItem)
      }
    
    /* Marcar tarea como completada */
    
      const completarTarea = (text) => {
        const itemIndex = item.findIndex(tarea => tarea.text === text)
        const nuevoItem = [...item]
        nuevoItem[itemIndex].completed = true
        guardarItem(nuevoItem)
      }
    
    /* Eliminar tarea  */
    
        const eliminarTarea = (text) => {
          const itemIndex = item.findIndex(tarea => tarea.text === text)
          const nuevoItem = [...item]
          nuevoItem.splice(itemIndex, 1)
          guardarItem(nuevoItem)
        }

    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            totalTareas,
            tareasCompletadas,
            searchValue,
            setSearchValue,
            listaDeItembuscados,
            agregarTarea,
            completarTarea,
            eliminarTarea,
            openModal,
            setOpenModal
        }}> 
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider }