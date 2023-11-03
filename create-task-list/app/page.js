'use client';

import React, { useState } from 'react';
import { Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Paper, Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

export default function TaskList() {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');
  const [listColor, setListColor] = useState('');

  const handleNameChange = (event) => {
    setListName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setListDescription(event.target.value);
  };

  const handleColorChange = (event) => {
    setListColor(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can perform the action to share the information
    console.log('List Name:', listName);
    console.log('Description:', listDescription);
    console.log('Color:', listColor);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center" pt={3}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={3} style={{ padding: '10px' }}>
            <Typography variant="h2" sx={{ ...theme.titleText }} align="center" data-testid="title">
              Create Task List
            </Typography>
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center" pt={4} data-testid="nameList">
              List Name:
            </Typography>
            <TextField
              sx={{ ...theme.container }}
              fullWidth
              value={listName}
              onChange={handleNameChange}
              inputProps={{ "data-testid": "nameContainer" }}
            />
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center" pt={4} data-testid="description">
              Description:
            </Typography>
            <TextField
              sx={{ ...theme.container }}
              multiline
              maxRows={3}
              fullWidth
              value={listDescription}
              onChange={handleDescriptionChange}
              inputProps={{ "data-testid": "descriptionContainer" }}
            />
            <Typography variant="h5" sx={{ ...theme.normalText }} align="center" pt={4} data-testid="color">
              List Color:
            </Typography>
            <FormControl fullWidth sx={{ ...theme.container }} data-testid="colorOptions" style={{ backgroundColor: listColor }}>
              <Select value={listColor} onChange={handleColorChange} style={{ fontWeight: 'bold' }}>
                <MenuItem value="#E25656" sx ={{ ...theme.redColorStyle }}>Red</MenuItem>
                <MenuItem value="#5694E2" sx = {{ ...theme.blueColorStyle }} >Blue</MenuItem>
                <MenuItem value="#56E26F" sx = {{ ...theme.greenColorStyle }} >Green</MenuItem>
                <MenuItem value="#D9E256" sx = {{ ...theme.yellowColorStyle }} >Yellow</MenuItem>
              </Select>
            </FormControl>
            <Box display="flex" justifyContent="space-between" style={{ marginTop: '30px', marginBottom: '15px' }}>
              <Button variant="contained" color="primary" size="large" onClick={handleSubmit} data-testid="create">
                Create Task List
              </Button>
              <Button variant="contained" color="error" size="large" data-testid="cancel">
                Cancel
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
