'use client';
import React, {useState} from 'react'
import TaskList from '../components/task-list'
import DeleteButton from '../components/delete-button';
import AddButton from '../components/add-button';
import { Grid } from '@mui/material';

export default function Home() {

   // Datos de ejemplo 
   const initialTaskLists = [
    { id: 1, name: 'Lista de Tareas 1', description: 'Descripción de la Lista 1' , tasks: ['1.1','1.2','1.3']},
    { id: 2, name: 'Lista de Tareas 2', description: 'Descripción de la Lista 2' , tasks: ['2.1','2.2','2.3']},
    { id: 3, name: 'Lista de Tareas 3', description: 'Descripción de la Lista 3' , tasks: ['3.1','3.2','3.3']},
    { id: 4, name: 'Lista de Tareas 4', description: 'Descripción de la Lista 1' , tasks: ['4.1','4.2','4.3']},
    { id: 5, name: 'Lista de Tareas 5', description: 'Descripción de la Lista 5' , tasks: ['5.1','5.2','5.3']},
  ];

  // Estados
  const [taskLists, setTaskLists]= useState(initialTaskLists);
  const [checkedItems, setCheckedItems] = useState([]);

  // Función para manejar las tareas seleccionadas
  function handleCheckboxChange(taskListId) {
    console.log('entro');
    if (checkedItems.includes(taskListId)) {
      setCheckedItems(checkedItems.filter((id) => id !== taskListId));
      console.log(checkedItems);
    } else {
      setCheckedItems([...checkedItems, taskListId]);
      console.log(checkedItems);
    }
  }

  // Función para eliminar las listas seleccionadas
  function handleDeleteButtonClick() {
    const updatedTaskLists = taskLists.filter((taskList) => !checkedItems.includes(taskList.id));
    setCheckedItems([]);
    setTaskLists(updatedTaskLists);
    console.log(taskLists);
  }

  // Función para añadir nuevas listas
  function handleAddButtonClick(){

  }

  return (
    <div>
      <h1>Tasks Lists</h1>
      <Grid container>
        {taskLists.map((taskList) => (
          <Grid item xs={12} key={taskList.id}>
            <TaskList
              taskList={taskList}
              handleCheckboxChange={handleCheckboxChange}
              checkedItems={checkedItems}
            />
            <DeleteButton 
              onClick={() => handleDeleteButtonClick()}
            />
          </Grid>
        ))}
        <AddButton 
          onClick={() => handleAddButtonClick()} 
        />
      </Grid>
    </div>
  );
} 