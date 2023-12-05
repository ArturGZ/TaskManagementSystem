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
import { getTaskLists, getTaskListsWithFilteredTasks, updateTaskStatus, deleteTaskList} from '@/utils/apitasklist';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Home() {

  // States
  const [taskLists, setTaskLists] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showBigButtons, setShowBigButtons] = useState(true);

  // Function to get all task lists without filter using API call
  async function fetchTaskLists() {
    try {
      const result = await getTaskLists();
      setTaskLists(result);
    } catch (error) {
      console.error('[ERROR] Error fetching task lists:', error);
    }
  }

  // Function useEffect to get all task lists initially
  useEffect(() => {
    fetchTaskLists();
  },[]);

  // Function to delete task lists using API call
  async function deleteTaskLists(task_list_id) {
    try {
      await deleteTaskList(task_list_id);
      fetchTaskLists();
    } catch (error) {
      console.error('[ERROR] Error deleting task lists:', error);
    }
  }

  // Function to handle checked task lists
  function handleCheckboxChange(taskListId) {
    console.info('[INFO] Updating selected items');
    if (checkedItems.includes(taskListId)) {
      setCheckedItems(checkedItems.filter((_id) => _id !== taskListId));
      console.debug('[DEBUG] Checked Items after a deletion:',checkedItems);
    } else {
      setCheckedItems([...checkedItems, taskListId]);
      console.debug('[DEBUG] Checked Items after an addition:',checkedItems);
    }
  }

  // Function to delete the checked task lists
  function handleDeleteButtonClick() {
    console.debug('[DEBUG] Selected lists to delete:', checkedItems);
    checkedItems.forEach(_id => {
      console.debug('[DEBUG] Id of Task List to delete:',_id);
      deleteTaskLists(_id);
    });
    setCheckedItems([]);
    console.info('[INFO] Selected lists have been deleted');
  }

  // Function to notify change of page to create new task list
  function handleAddButtonClick(){
    console.info('[INFO] Redirecting to create task list page')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2" component="div" sx={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(2),
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem', // Small screens
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize: '2.5rem', // Medium screens
            },
            [theme.breakpoints.between('md', 'lg')]: {
              fontSize: '3rem', // Large screens
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: '4rem', // Extra large screens
            }
          }}>
          <Box component={CheckCircleIcon} sx={{
            fontSize: '3rem',
            marginRight: '10px',
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem', // Small screens
            },
            [theme.breakpoints.between('sm', 'md')]: {
              fontSize: '2.5rem', // Medium screens
            },
            [theme.breakpoints.between('md', 'lg')]: {
              fontSize: '3rem', // Large screens
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: '4rem', // Extra large screens
            }
          }} />
          Organize Your Tasks
      </Typography>
        <Grid container spacing={2}>
          {taskLists && taskLists.map((taskList) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={taskList._id} >
              <TaskList
                taskList={taskList}
                handleCheckboxChange={handleCheckboxChange}
                checkedItems={checkedItems}
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

