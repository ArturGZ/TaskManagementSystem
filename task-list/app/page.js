'use client';
import React, {useState} from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import TaskList from '../components/task-list'
import DeleteButton from '../components/delete-button';
import AddButton from '../components/add-button';
import ToggleButton from '../components/toggle-button';
import { Grid, Typography, Button} from '@mui/material';

export default function Home() {

   // Datos de ejemplo 
   const initialTaskLists = [
    { id: 1, name: 'Lista de Tareas 1', description: 'Descripción de la Lista 1' , color: '#9A5343', tasks: [
      {id: 1, name: 'Tarea 1 de la Lista 1', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Tarea 2 de la Lista 1', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Tarea 3 de la Lista 1', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 2, name: 'Lista de Tareas 2', description: 'Descripción de la Lista 2' , color: 'blue', tasks: [
      {id: 1, name: 'Tarea 1 de la Lista 2', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Tarea 2 de la Lista 2', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Tarea 3 de la Lista 2', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 3, name: 'Lista de Tareas 3', description: 'Descripción de la Lista 3' , color: 'yellow', tasks: [
      {id: 1, name: 'Tarea 1 de la Lista 3', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Tarea 2 de la Lista 3', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Tarea 3 de la Lista 3', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 4, name: 'Lista de Tareas 4', description: 'Descripción de la Lista 4' , color: 'red', tasks: [
      {id: 1, name: 'Tarea 1 de la Lista 4', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Tarea 2 de la Lista 4', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Tarea 3 de la Lista 4', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 5, name: 'Lista de Tareas 5', description: 'Descripción de la Lista 5' , color: 'blue', tasks: [
      {id: 1, name: 'Tarea 1 de la Lista 5', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Tarea 2 de la Lista 5', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Tarea 3 de la Lista 5', start:'10-10-2023', due: '10-11-2023', status: 'Incomplete'}
    ]},
  ];

  // Estados
  const [taskLists, setTaskLists]= useState(initialTaskLists);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showBigButtons, setShowBigButtons] = useState(true); 

  // Función para manejar las tareas seleccionadas
  function handleCheckboxChange(taskListId) {
    console.info('[INFO] Actualizando elementos seleccionados');
    if (checkedItems.includes(taskListId)) {
      setCheckedItems(checkedItems.filter((id) => id !== taskListId));
      console.debug(checkedItems);
    } else {
      setCheckedItems([...checkedItems, taskListId]);
      console.debug(checkedItems);
    }
  }

  // Función para eliminar las listas seleccionadas
  function handleDeleteButtonClick() {
    const updatedTaskLists = taskLists.filter((taskList) => !checkedItems.includes(taskList.id));
    setCheckedItems([]);
    setTaskLists(updatedTaskLists);
    console.info('[INFO] Se han eliminado las listas seleccionadas')
    console.debug(taskLists);
  }

  // Función para obtener id siguiente de lista
  const getNewTaskListId = () => {
    const existingIds = taskLists.map((taskList) => taskList.id);
    return existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
  };

  const getNewTaskId = (taskListId) => {
    const taskList = taskLists.find((list) => list.id === taskListId);
    const existingIds =  taskList.tasks.map((tasks) => tasks.id);
    return existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
  }

  // Función para añadir nuevas listas
  function handleAddButtonClick(){
    const newTaskListId = getNewTaskListId();

    const newTaskList = {
      id: newTaskListId,
      name: `Lista de Tareas ${newTaskListId}`,
      description: `Descripción de la Lista ${newTaskListId}`,
      color: 'red',
      tasks: []
    };

    setTaskLists([...taskLists, newTaskList]);
  }

  // Función para añadir nuevas tareas
  function handleAddTaskClick(taskListId){
    const newTaskId = getNewTaskId(taskListId);
  
    const newTask = {
      id: newTaskId,
      name: `Tarea ${newTaskId} de la lista ${taskListId}`,
      start: '19-11-2023',
      due: '25-12-2023',
      status: 'Incomplete'
    }
  
    // Encuentra la lista correspondiente por su id
    const updatedTaskLists = taskLists.map((taskList) => {
      if (taskList.id === taskListId) {
        // Añade la nueva tarea a la lista correspondiente
        return {
          ...taskList,
          tasks: [...taskList.tasks, newTask],
        };
      }
      return taskList;
    });
  
    // Actualiza el estado con la nueva lista que contiene la tarea
    setTaskLists(updatedTaskLists);
  }
  

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Typography style={{backgroundColor: theme.palette.primary.main,  // Color de fondo
        color: theme.palette.primary.contrastText,    // Color del texto
        padding: theme.spacing(2),                    // Espaciado
        textAlign: 'center',
        fontSize: '200%'}}>
        Tasks Lists
      </Typography>
      <Grid container spacing={{ xs: 0, sm: 1, md: 2 }} columns={{ xs: 2, sm: 3, md: 4 }}>
        {taskLists.map((taskList) => (
          <Grid item xs={1} sm={1} md={1} key={taskList.id}>
            <TaskList
              taskList={taskList}
              handleCheckboxChange={handleCheckboxChange}
              checkedItems={checkedItems}
              handleAddTaskClick={handleAddTaskClick}
            />
          </Grid>
        ))}
        {showBigButtons && (
          <Grid item xs={1} sm={1} md={1}>
            <DeleteButton onClick={() => handleDeleteButtonClick()} />
            <AddButton onClick={() => handleAddButtonClick()} />
          </Grid>
        )}
        <ToggleButton
          onClick={() => setShowBigButtons(!showBigButtons)}
          showBigButtons={showBigButtons}
        />
      </Grid>
    </div>
    </ThemeProvider>
  );
}
