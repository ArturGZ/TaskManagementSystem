'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {FormControl, InputLabel} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import '../../styles/theme.jsx'


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
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      marginY={8}
    >
      <Grid item xs={12} sm={6} md={4}>

        <Card align = 'center' sx={{ maxWidth: '700em' }}>
          <div style={{background:'#418fe8'}}>
          <Typography gutterBottom variant="h2" component="div" data-testid="tareas" >
              Add Tasks
          </Typography>
          </div>
          <Typography gutterBottom variant="h4" component="div">
            Tasks
          </Typography>
          <TextField 
            fullWidth
            label="Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Typography gutterBottom variant="h4" component="div" data-testid="descripcion">
              Description
          </Typography>
          <TextField
            fullWidth
            label="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <Typography gutterBottom variant="h4" component="div" data-testid="fechaFinalizacion">
              Date Finish
          </Typography>
          <TextField
            fullWidth
            type= 'date'
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <Typography gutterBottom variant="h4" component="div" data-testid="estado"> 
            Status
          </Typography>
          <FormControl fullWidth >
          <InputLabel >Status</InputLabel>
          <Select
              value={newState}
              onChange={handleStateChange}
            >
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </Select>

          </FormControl>
          <div style= {{margin:'1em'}}>
          <Button variant="contained" color="primary" onClick={handleAddTask} data-testid="agregarTarea">
            Add task
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

      </Grid>

    </Grid>
  );
}

export default TaskList;
