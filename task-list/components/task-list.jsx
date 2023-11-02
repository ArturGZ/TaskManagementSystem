import {useState,Fragment} from 'react';
import { List, ListItemButton, ListItemText, Divider, Checkbox, Collapse, Button } from '@mui/material';
export default function TaskList({ taskList, checkedItems, handleCheckboxChange, handleAddTaskClick}) {
  
  // Estados
  const [expand, setExpand] = useState(false);

  // Función para exponer la id en caso de click al checkbox
  const onCheckboxChange = (taskListId) => {
    handleCheckboxChange(taskListId);
    console.log(checkedItems);
  };

  // Función para mostrar las tareas de la lista
  const onExpandItem = () => {
      setExpand(!expand);
  };
  
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
            <Button onClick={() => onAddClick(taskList.id)}> Add </Button>
          </Collapse>
          
        </Fragment>
    </List>
  );
}




