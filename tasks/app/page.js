'use client';

import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
//---
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import data from './data.json';
import { useState } from 'react';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



export default function MediaCard() {
  const [tarea, setTarea] = useState();
  const [descripcion, setDescripcion] = useState();
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div color = "primary">
    <Card sx={{ maxWidth: 500 }}>
      <CardContent >
        <div >
        <ListItemButton onClick={handleClick}>
        <ListItemText >
        < Typography gutterBottom variant="h5" component="div">
          Cocinar 
          </Typography>
        </ListItemText>
      </ListItemButton>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText>
          <Typography gutterBottom variant="h6" component="div">
          Descripcion 
          </Typography>
          <Typography size="small" color="text.secondary">
            Preparar comida para la familia
          </Typography>
          <Typography gutterBottom variant="h6" component="div" >
            Prioridad 
          </Typography>
          <Typography size="small" color="text.secondary"  >
            baja
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Fecha 
          </Typography>
          <Typography size="small" color="text.secondary" >
            fecha Incio tarea
          </Typography>
          <Typography size="small" color="text.secondary" >
            fecha finalizacion
          </Typography>
          </ListItemText>
        </ListItemButton>
      </Collapse>
        
        
        </div>
      </CardContent> 


      <CardActions>
      <FormControlLabel control={<Checkbox  />} label="Complete" align = "right" />        
      </CardActions>
    </Card>
    </div>
  );
}

