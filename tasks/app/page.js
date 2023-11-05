'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {FormControl, InputLabel} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import '../styles/theme.jsx'


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newState, setNewState] = useState('');

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: newTask,
        description: newDescription,
        date: newDate,
        state: newState,
      },
    ]);
    setNewTask('');
    setNewDescription('');
    setNewDate('');
    setNewState('');
  };
  const handleStateChange = (event) => {
    setNewState(event.target.value);
  };


  return (
    <div align = 'center' style={{ maxWidth: '700px', margin: '0 auto', marginTop: '10em' }}> 
    <Card align = 'center' sx={{ maxWidth: '700em' }}>
      <div style={{background:'blue'}}>
      <Typography gutterBottom variant="h2" component="div" >
          Agregar Tareas
      </Typography>
      </div>
      <Typography gutterBottom variant="h4" component="div" data-testid="tareas">
        Tareas
      </Typography>
      <TextField 
        fullWidth
        label="Tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Typography gutterBottom variant="h4" component="div" data-testid="descripcion">
          Descripcion
      </Typography>
      <TextField
        fullWidth
        label="Descripción"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <Typography gutterBottom variant="h4" component="div" data-testid="fechaFinalizacion">
          Fecha Finalizacion
      </Typography>
      <TextField
        fullWidth
        type= 'date'
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <Typography gutterBottom variant="h4" component="div" data-testid="estado">
        Estado
      </Typography>
      <FormControl fullWidth >
      <InputLabel >Estado</InputLabel>
      <Select
          value={newState}
          onChange={handleStateChange}
        >
          <MenuItem value="Completado">Completado</MenuItem>
          <MenuItem value="Termiando">Termiando</MenuItem>
        </Select>

      </FormControl>
      <div style= {{margin:'1em'}}>
      <Button variant="contained" color="primary" onClick={handleAddTask} data-testid="agregarTarea">
        Agregar Tarea
      </Button>
      </div>
      
    </Card>
    <Card style={{ maxWidth: '700em', margin: '2em'}}>
    <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - {task.description} - {task.date} -{task.state}
          </li>
        ))}
      </ul>
    </Card>
    </div>
  );
}

export default TaskList;
