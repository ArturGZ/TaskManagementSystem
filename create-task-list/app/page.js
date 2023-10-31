'use client'; 

import React, { useState } from 'react';
import { Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Paper, Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

export default function ListaTareas(){
  const [nombreLista, setNombreLista] = useState('');
  const [descripcionLista, setDescripcionLista] = useState('');
  const [colorLista, setColorLista] = useState('');

  const handleNombreChange = (event) => {
    setNombreLista(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcionLista(event.target.value);
  };

  const handleColorChange = (event) => {
    setColorLista(event.target.value);
  };

  const handleSubmit = () => {
    // Aquí se puede realizar la acción de compartir la información
    console.log('Nombre:', nombreLista);
    console.log('Descripción:', descripcionLista);
    console.log('Color:', colorLista);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center" pt = {3}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={3} style={{ padding: '10px' }}>
            <Typography variant="h2" sx={{ ...theme.titleText }} align="center" data-testid='title'>Crear Lista de Tareas</Typography>
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center" pt = {4} data-testid='nameList'>Nombre de la Lista:</Typography>
            <TextField
              sx={{ ...theme.container }}
              fullWidth
              value={nombreLista}
              onChange={handleNombreChange}
              data-testid='nameContainer'
            />
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center" pt = {4} data-testid='description'>Descripción:</Typography>
            <TextField
              sx={{ ...theme.container }}
              multiline
              maxRows={3}
              fullWidth
              value={descripcionLista}
              onChange={handleDescripcionChange}
              data-testid='descriptionContainer'
            />
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center" pt = {4} data-testid='color'>Color de la Lista:</Typography>
            <FormControl fullWidth sx={{ ...theme.container }} data-testid='colorOptions'>
              <Select
                value={colorLista}
                onChange={handleColorChange}
              >
                <MenuItem value="red">Rojo</MenuItem>
                <MenuItem value="blue">Azul</MenuItem>
                <MenuItem value="green">Verde</MenuItem>
                <MenuItem value="yellow">Amarillo</MenuItem>
              </Select>
            </FormControl>
            <Box display="flex" justifyContent="space-between" style={{ marginTop: '30px', marginBottom: '15px' }}>
              <Button variant="contained" color="primary" size="large" onClick={handleSubmit} data-testid='create'>
                Crear Lista de Tareas
              </Button>
              <Button variant="contained" color="error" size="large" data-testid='cancel'>
                Cancelar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};