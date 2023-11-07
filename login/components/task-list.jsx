import {useState,Fragment} from 'react';
import { List, ListItemButton, ListItemText, Divider, Checkbox, Collapse, Button } from '@mui/material';
import Link from 'next/link';

export default function TaskList({ taskList, checkedItems, handleCheckboxChange, handleAddTaskClick}) {
  
  // States
  const [expand, setExpand] = useState(false);

  // Function to share checked task lists id
  const onCheckboxChange = (taskListId) => {
    handleCheckboxChange(taskListId);
    console.log(checkedItems);
  };

  // Function to whoe tasks in a list
  const onExpandItem = () => {
      setExpand(!expand);
  };
  
  // Function to share clicked task list id to add a new task
  const onAddClick = (taskListId) => {
    handleAddTaskClick(taskListId);
  };

  return (
    <List data-testid = 'list'>
        <Fragment key={taskList.id}>
          <ListItemButton data-testid = 'listitembutton' style={{ backgroundColor: taskList.color,
            padding: '2%',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
          }} 
          onClick={() => onExpandItem(taskList.id)} selected={checkedItems.includes(taskList.id)}>
            <Checkbox
              data-testid = 'checkbox'
              checked={checkedItems.includes(taskList.id)}
              onChange={() => onCheckboxChange(taskList.id)}
              onClick={(event) => event.stopPropagation()}  
            />
            <ListItemText data-testid = 'listitemtext' primary={taskList.name} secondary={taskList.description} />
          </ListItemButton>
          <Divider data-testid = 'divider'/>
          <Collapse in={expand} timeout="auto" unmountOnExit  style={{
                backgroundColor: taskList.color,
              }}>
            {taskList.tasks.map((task) => (
              <List data-testid = 'list' key={task.id}>
                  <ListItemText data-testid = 'listitemtext' primary={task.name} secondary={`${task.description}`} />
                  <ListItemText data-testid = 'listitemtext' secondary={`Due: ${task.due}`} />   
                  <ListItemText data-testid = 'listitemtext' secondary={`Status: ${task.status}`} />                  
              </List>
            ))}
            <Link href="/tasks" style={{ textDecoration: 'none' }}>
              <Button onClick={() => onAddClick(taskList.id)}> Add </Button>
            </Link>
          </Collapse>
          
        </Fragment>
    </List>
  );
}





