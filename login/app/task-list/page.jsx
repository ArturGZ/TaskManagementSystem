'use client';
import React, {useState} from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import TaskList from '../../components/task-list'
import DeleteButton from '../../components/delete-button';
import AddButton from '../../components/add-button';
import ToggleButton from '../../components/toggle-button';
import { Grid, Typography} from '@mui/material';
import Link from 'next/link';

export default function Home() {

   // Datos de ejemplo 
   const initialTaskLists = [
    { id: 1, name: 'Task List 1', description: 'Description List 1' , color: '#9A5343', tasks: [
      {id: 1, name: 'Taks 1 of List 1', description:'Description Task 1', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Task 2 of List 1', description:'Description Task 2', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Task 3 of List 1', description:'Description Task 3', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 2, name: 'Task List 2', description: 'Description List 2' , color: 'blue', tasks: [
      {id: 1, name: 'Taks 1 of List 2', description:'Description Task 1', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Task 2 of List 2', description:'Description Task 2', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Task 3 of List 2', description:'Description Task 3', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 3, name: 'Task List 3', description: 'Description List 3' , color: 'yellow', tasks: [
      {id: 1, name: 'Taks 1 of List 3', description:'Description Task 1', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Task 2 of List 3', description:'Description Task 2', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Task 3 of List 3', description:'Description Task 3', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 4, name: 'Task List 4', description: 'Description List 4' , color: 'red', tasks: [
      {id: 1, name: 'Taks 1 of List 4', description:'Description Task 1', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Task 2 of List 4', description:'Description Task 2', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Task 3 of List 4', description:'Description Task 3', due: '10-11-2023', status: 'Incomplete'}
    ]},
    { id: 5, name: 'Task List 5', description: 'Description List 5' , color: 'blue', tasks: [
      {id: 1, name: 'Taks 1 of List 5', description:'Description Task 1', due: '10-11-2023', status: 'Incomplete'},
      {id: 2, name: 'Task 2 of List 5', description:'Description Task 2', due: '10-11-2023', status: 'Incomplete'},
      {id: 3, name: 'Task 3 of List 5', description:'Description Task 3', due: '10-11-2023', status: 'Incomplete'}
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
      name: `Task List ${newTaskListId}`,
      description: `Description List ${newTaskListId}`,
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
      description:`Description Task ${newTaskId}`,
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
      <Typography style={{backgroundColor: '#bf34bb' ,  // Color de fondo
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
      </Grid>
      {showBigButtons && (
          <Grid item xs={1} sm={1} md={1}>
            <DeleteButton onClick={() => handleDeleteButtonClick()} />
            <Link href='/tasks' style={{textDecoration: 'none'}} >
              <AddButton onClick={() => handleAddButtonClick()} />
            </Link>
          </Grid>
        )}
        <ToggleButton
          onClick={() => setShowBigButtons(!showBigButtons)}
          showBigButtons={showBigButtons}
        />
    </div>
    </ThemeProvider>
  );
}
