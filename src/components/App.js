import React from "react";
import AppUI from './AppUI'
import { ToDoProvider } from "./ToDoContext";
import '../assets/styles.css';

function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
