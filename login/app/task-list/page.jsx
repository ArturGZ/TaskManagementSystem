'use client';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import TaskList from '../../components/task-list';
import DeleteButton from '../../components/delete-button';
import AddButton from '../../components/add-button';
import ToggleButton from '../../components/toggle-button';
import { Grid, Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const isClient = typeof window !== 'undefined'; // Check if we are on the client

  // Data
  const initialTaskLists = [];

  // Function to get data from local storage
  const getStoredData = () => {
    if(isClient){
        const storedData = localStorage.getItem('taskLists');
        return storedData ? JSON.parse(storedData) : initialTaskLists;
    }  
    }
  
  // States
  const [taskLists, setTaskLists] = useState(getStoredData());
  const [checkedItems, setCheckedItems] = useState([]);
  const [showBigButtons, setShowBigButtons] = useState(true);

  // Effect to save data to local storage when it changes
  useEffect(() => {
      localStorage.setItem('taskLists', JSON.stringify(taskLists));
  }, [taskLists]);

  // Function to handle checked task lists
  function handleCheckboxChange(taskListId) {
    console.info('[INFO] Updating selected items');
    if (checkedItems.includes(taskListId)) {
      setCheckedItems(checkedItems.filter((id) => id !== taskListId));
      console.debug(checkedItems);
    } else {
      setCheckedItems([...checkedItems, taskListId]);
      console.debug(checkedItems);
    }
  }

  // Function to delete the checked task lists
  function handleDeleteButtonClick() {
    const updatedTaskLists = taskLists.filter((taskList) => !checkedItems.includes(taskList.id));
    setCheckedItems([]);
    setTaskLists(updatedTaskLists);
    console.info('[INFO] Selected lists have been deleted');
    console.debug(taskLists);
  }

  // Function to obtain the new task list id
  const getNewTaskListId = () => {
    const existingIds = taskLists.map((taskList) => taskList.id);
    return existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
  }

  // Function to obtain the new task id
  const getNewTaskId = (taskListId) => {
    const taskList = taskLists.find((list) => list.id === taskListId);
    const existingIds =  taskList.tasks.map((tasks) => tasks.id);
    return existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
  }

  // Function to add new task lists
  function handleAddButtonClick(){
    const newTaskListId = getNewTaskListId();

    const newTaskList = {
      id: newTaskListId,
      name: `Task List ${newTaskListId}`,
      description: `Description List ${newTaskListId}`,
      color: '#DE4035',
      tasks: []
    };

    setTaskLists([...taskLists, newTaskList]);
  }

  // Function to add new tasks
  function handleAddTaskClick(taskListId){
    const newTaskId = getNewTaskId(taskListId);

    const newTask = {
      id: newTaskId,
      name: `Task ${newTaskId} of List ${taskListId}`,
      description: `Description Task ${newTaskId}`,
      due: '25-12-2023',
      status: 'In Progress'
    };

    // Find the corresponding list by its id
    const updatedTaskLists = taskLists.map((taskList) => {
      if (taskList.id === taskListId) {
        // Add the new task to the corresponding list
        return {
          ...taskList,
          tasks: [...taskList.tasks, newTask],
        };
      }
      return taskList;
    });

    // Update the state with the new list that contains the task
    setTaskLists(updatedTaskLists);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" style={{ backgroundColor: '#bf34bb', color: theme.palette.primary.contrastText, padding: theme.spacing(2), textAlign: 'center' }}>
          Task Lists
        </Typography>
        <Grid container spacing={2}>
          {taskLists && taskLists.map((taskList) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={taskList.id}>
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
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: theme.spacing(2) }}>
            <DeleteButton onClick={() => handleDeleteButtonClick()} />
            <Link href="/create-task-list" style={{ textDecoration: 'none' }}>
              <AddButton onClick={() => handleAddButtonClick()} />
            </Link>
          </Box>
        )}
        <ToggleButton onClick={() => setShowBigButtons(!showBigButtons)} showBigButtons={showBigButtons} />
      </Container>
    </ThemeProvider>
  );
}

