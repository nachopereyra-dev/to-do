import React, { useContext } from "react";
import ToDoCounter from "./ToDoCounter";
import {ToDoContext} from "./ToDoContext";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";
import ToDoItem from "./ToDoItem";
import CreateToDoButton from "./CreateToDoButton";
import Modal from "./modal";
import ToDoForm from "./ToDoForm";

function AppUI() {

  const {
    error, 
    loading,
    listaDeItembuscados, 
    completarTarea, 
    eliminarTarea,
    openModal,
    setOpenModal
        } = useContext(ToDoContext)

    return(
        <>
          <ToDoCounter />

          <ToDoSearch />

          <ToDoList>

            { error && <p>Hubo un error</p>}
            { loading && <p>Cargando...</p>}
            { (!loading && listaDeItembuscados) && <p>Crea y gestiona tus tareas</p>}

            {listaDeItembuscados.map((tarea,i) => {
              return ( 
                <ToDoItem 
                  {...tarea} 
                  key={tarea+i} 
                  completed={tarea.completed}
                  onComplete={() => completarTarea(tarea.text)}
                  onDelete={() => eliminarTarea(tarea.text)}
                />)
            })}

          </ToDoList>

            {openModal && (
                <Modal>
                    <ToDoForm/>
                </Modal>
            )}


          <CreateToDoButton
                setOpenModal={setOpenModal}
          />
        </>
    )
}

export default AppUI