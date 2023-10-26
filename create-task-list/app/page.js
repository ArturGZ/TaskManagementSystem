'use client';

import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';

export default function IconCheckboxes() {
  const [tarea, setTarea] = useState();
  const [descripcion, setDescripcion] = useState();
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();

  return (
    <div>
      <Grid container spacing={5} justifyContent='center' p ={10}>
      <Card sx={{ minWidth: 700 }}>
        <CardContent>
          <Typography variant="h3" component="div" align='center' pt={5} pb ={3}>
            Crear nueva tarea
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs ={6}>
              <Typography variant="h5" color="initial">
                Tarea:
              <TextField size = 'small' fullWidth={true}
                id="tarea"
                label=""
                vale = {tarea}
                onChange={(e) => setTarea(e.target.value)}
              />
              </Typography>
              <Typography variant="h5" color="initial" pt ={5}>
                Descripción:
              <TextField size = 'small' fullWidth={true}
                id="descripcion"
                label=""
                value = {descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              </Typography>
            </Grid>
            <Grid item xs ={6}>
              <Typography variant="h5" color="initial" align ='center'>
                Fecha inicio
              <TextField size = 'small' fullWidth={true}
                id="fechaInicio"
                type='date'
                label=""
                value = {fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
              </Typography>
              <Typography variant="h5" color="initial" pt ={5} align = 'center'>
                Fecha fin
              <TextField size = 'small' align = 'center' fullWidth = {true}
                id="fechaFin"
                type='date'
                label=""
                value = {fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
              />
              </Typography>
            </Grid>
            <Grid item xs = {12}>
              <Typography variant="h5" pt = {5} >Prioridad</Typography>
              <Autocomplete
                disablePortal
                id="prioridad"
                options={prioridades}
                renderInput={(params) => <TextField {...params} size='small'/>}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="large" variant = 'contained'>
            Guardar
          </Button>
          <Button variant="contained" size = 'large'>
            Cancelar            
          </Button>
        </CardActions>
      </Card>
      </Grid>
    </div>
    

    
  );
}

const prioridades = [
  {label : ""},
  {label : 'Baja'},
  {label : 'Normal'},
  {label : 'Media'},
  {label : 'Alta'},
  
]