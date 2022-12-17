import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    /* Estado inicial de nuestra itema de tareas */
    const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {

    /* simula el llamado a una API */
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem)
        setLoading(false)
      } catch(error) {
        setError(error)
      }
    }, 1000)
  })

  const guardarItem = (nuevoItem) => {
    try {
      const itemStringified = JSON.stringify(nuevoItem)
      localStorage.setItem(itemName, itemStringified)
      setItem(nuevoItem)
    } catch {
      setError(error)
    }
  }

  return {
    item,
    guardarItem,
    loading, 
    error
  }

}

export default useLocalStorage