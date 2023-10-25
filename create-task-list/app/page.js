'use client';

import * as React from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  const [tarea, setTarea] = useState();
  return (
    <div>
      <Typography variant="h1" align='center' pt={15} >
        Crear nueva tarea
      </Typography>

      <Grid container alignItems='center' direction='row' justifyContent='center' pt={5} pb = {2}>
        <Typography variant="h5" color="secondary" mr={2} >Tarea:</Typography>
        <TextField
          id="tarea"
          label="Tarea"
          value = {tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        
        <Typography variant="h5" color="initial"> </Typography>
      </Grid>

      <Grid container alignItems='center' direction='row' justifyContent='center' pb={5} >
        <Typography variant="h5" color="secondary" mr={2} >Descripción:</Typography>
        <TextField
          id="descripcion"
          label="Descripción"
          value = {tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        
        <Typography variant="h5" color="initial"> </Typography>
      </Grid>

   
      <Grid container spacing={2}>
        
        <Grid container justifyContent="center" direction='column' alignItems='center' item xs={12} sm={6}>
            <Grid container justifyContent='center' direction='row' >
              <Typography variant="h5" color="initial" mr={2}>Fecha inicio:</Typography>
              <TextField
                id="fecha_inicio"
                type="date"
                format = "MM/dd/yyyy"
                defaultValue="12-31-2023"
              />
            </Grid>
            <Grid container item justifyContent='center' direction='row' >
              <Typography variant="h5" color="initial" mr={5} align='right'>Fecha fin:</Typography>
              <TextField
                id="fecha_fin"
                type="date"
                format = "MM/dd/yyyy"
                defaultValue="12-31-2023"
              />
            </Grid>
          
        </Grid>
      </Grid>
    </div>  
  );
}
