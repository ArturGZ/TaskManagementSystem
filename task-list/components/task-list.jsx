import {useState,Fragment} from 'react';
import { List, ListItemButton, ListItemText, Divider, Checkbox, Collapse, ListItem} from '@mui/material';
export default function TaskList({ taskList, checkedItems, handleCheckboxChange}) {
  
  // Estados
  const [shouldExpand, setShouldExpand] = useState(true);
  const [expand, setExpand] = useState(false);

  // Función para exponer la id en caso de click al checkbox
  const onCheckboxChange = (taskId) => {
    handleCheckboxChange(taskId);
    console.log(checkedItems);
  };

  // Función para mostrar las tareas de la lista
  const onExpandItem = (taskId) => {
    if(shouldExpand){
      setExpand(!expand);
    }
  };

  return (
    <List>
        <Fragment key={taskList.id}>
          <ListItemButton onClick={() => onExpandItem(taskList.id)} selected={checkedItems.includes(taskList.id)}>
            <Checkbox
              checked={checkedItems.includes(taskList.id)}
              onChange={() => onCheckboxChange(taskList.id)}
              onMouseEnter={() => setShouldExpand(false)}
              onMouseLeave={() => setShouldExpand(true)}
            />
            <ListItemText primary={taskList.name} secondary={taskList.description} />
          </ListItemButton>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            {taskList.tasks.map((task) => (
              <List key={task}>
                <ListItem>
                  <ListItemText primary={task} />
                </ListItem>
              </List>
            ))}
          </Collapse>
          <Divider />
        </Fragment>
    </List>
  );
}





