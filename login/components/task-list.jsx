import {useState,Fragment} from 'react';
import { List, ListItemButton, ListItemText, Divider, Checkbox, Collapse, Button } from '@mui/material';
import Link from 'next/link';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

export default function TaskList({ taskList, checkedItems, handleCheckboxChange}) {
  
  // States
  const [expand, setExpand] = useState(false);

  // Function to share checked task lists id
  const onCheckboxChange = (taskListId) => {
    handleCheckboxChange(taskListId);
    console.debug('[DEBUG] Selected items at internal component level:', checkedItems);
  };

  // Function to show tasks in a list
  const onExpandItem = () => {
      setExpand(!expand);
  };

  // Function to notify change of page to create new task
  const onAddClick = () => {
    console.info('[INFO] Redirecting to create task page');
  };

  return (
    <ThemeProvider theme={theme}>
      <List>
        <Fragment key={taskList._id}>
          <ListItemButton style={{ backgroundColor: taskList.color,
            padding: '2%',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
          }} 
          onClick={() => onExpandItem(taskList._id)} selected={checkedItems.includes(taskList._id)}>
            <Checkbox
              checked={checkedItems.includes(taskList._id)}
              onChange={() => onCheckboxChange(taskList._id)}
              onClick={(event) => event.stopPropagation()}  
            />
            <ListItemText primary={taskList.name} secondary={taskList.description} />
          </ListItemButton>
          <Divider />
          <Collapse in={expand} timeout="auto" unmountOnExit  style={{
                backgroundColor: taskList.color
              }}>
            {taskList.tasks.map((task) => (
              <List key={task._id} >
                  <ListItemText primary={task.name} secondary={`${task.description}`} />
                  <ListItemText secondary={`Due: ${task.due}`} />   
                  <ListItemText secondary={`Status: ${task.status}`} />                  
              </List>
            ))}
            <Link href="/tasks" style={{ textDecoration: 'none' }}>
            <Button onClick={onAddClick} style={{
              backgroundColor: taskList.color,
              color: theme.palette.getContrastText(taskList.color),
            }}>
              <AddTaskIcon sx={{ marginRight: '5px' }} />
              ADD TASK
            </Button>
            </Link>
          </Collapse>
        </Fragment>
      </List>
    </ThemeProvider>
  );
}





