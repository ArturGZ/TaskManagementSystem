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

import data from './data.json';
import { useState } from 'react';


export default function MediaCard() {
  const [tarea, setTarea] = useState();
  const [descripcion, setDescripcion] = useState();
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  return (
    <div>
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tarea 1
        </Typography>
        <Typography variant="body4" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <FormControlLabel control={<Checkbox  align = 'right'/>} label="Complete"  />        
      </CardActions>
    </Card>
    </div>
  );
}

