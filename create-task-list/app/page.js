'use client'; 

import React, { useState } from 'react';
import { Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Paper, Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

const ListaTareas = () => {
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
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={3} style={{ padding: '10px' }}>
            <Typography variant="h2" sx={{ ...theme.titleText }} align="center">Crear Lista de Tareas</Typography>
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center">Nombre de la Lista:</Typography>
            <TextField
              sx={{ ...theme.container }}
              fullWidth
              value={nombreLista}
              onChange={handleNombreChange}
            />
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center">Descripción:</Typography>
            <TextField
              sx={{ ...theme.container }}
              multiline
              maxRows={3}
              fullWidth
              value={descripcionLista}
              onChange={handleDescripcionChange}
            />
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center">Color de la Lista:</Typography>
            <FormControl fullWidth sx={{ ...theme.container }}>
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
              <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                Crear Lista de Tareas
              </Button>
              <Button variant="contained" color="error" size="large">
                Cancelar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ListaTareas;