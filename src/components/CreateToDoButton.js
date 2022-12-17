import React from "react";

function CreateToDoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return(
        <>
            <button 
                className="create-todo-button"
                onClick={onClickButton}
            >
                +
            </button>
        </>
    )
}

export default CreateToDoButton