'use client';

import React, { useState } from 'react';
import { Button, TextField, Typography, FormControl, Select, MenuItem, Paper, Box, Grid, AppBar, Toolbar } from '@mui/material';
import {Drawer, List, ListItem, ListItemText, IconButton, ListItemButton, ListItemIcon} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TaskIcon from '@mui/icons-material/Task';
import NotificationsIcon from '@mui/icons-material/Notifications';
import theme from '../../styles/theme';
import Swal from 'sweetalert2';

export default function TaskList() {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');
  const [listColor, setListColor] = useState("#3B4BD8");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const drawerWidth = 800;

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
    if (!listName ) {
      Swal.fire('Error', 'Enter a name for the task', 'error');
    } else {
      // Here you can perform the action to share the information
      console.log('List Name:', listName);
      console.log('Description:', listDescription);
      console.log('Color:', listColor);
      Swal.fire('Success', 'Task list created successfully', 'success');
    }
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
              <Select value = {listColor} onChange={handleColorChange} style={{ fontWeight: 'bold', color:'black' }}>
                <MenuItem value="#DE4035" sx={{ ...theme.redColorStyle }}>Red</MenuItem>
                <MenuItem value="#FFC0CB" sx = {{ ...theme.pinkColorStyle }} >Pink</MenuItem>
                <MenuItem value="#FFB700" sx = {{ ...theme.orangeColorStyle }} >Orange</MenuItem>
                <MenuItem value="#FFFF99" sx = {{ ...theme.yellowColorStyle }} >Yellow</MenuItem>
                <MenuItem value="#90EE90" sx = {{ ...theme.lightGreenColorStyle }} >Light Green</MenuItem>
                <MenuItem value="#1A8127" sx = {{ ...theme.darkGreenColorStyle }} >Dark Green</MenuItem>
                <MenuItem value="#ADD8E6" sx = {{ ...theme.lightBlueColorStyle }} >Light Blue</MenuItem>
                <MenuItem value="#3B4BD8" sx = {{ ...theme.darkBlueColorStyle}} >Dark Blue</MenuItem>
                <MenuItem value="#B19CD9" sx = {{ ...theme.lightPurpleColorStyle }} >Light Purple</MenuItem>
                <MenuItem value="#9370DB" sx = {{ ...theme.darkPurpleColorStyle }} >Dark Purple</MenuItem>
                <MenuItem value="#D3D3D3" sx = {{ ...theme.grayColorStyle }}>Gray</MenuItem>
              </Select>
            </FormControl>
            <Box display="flex" justifyContent="space-between" style={{ marginTop: '30px', marginBottom: '15px' }}>
              <Button variant="contained" color="primary" size="large" onClick={handleSubmit} data-testid="create" sx = {{ fontWeight: 'bold', '&:hover': {transform: 'scale(1.3)', transition : 'transform 0.5s'} }}>
                Create Task List
              </Button>
              <Button variant="contained" color="error" size="large" data-testid="cancel" sx = {{ fontWeight: 'bold', '&:hover': {transform: 'scale(1.3)', transition : 'transform 0.5s'} }}>
                Cancel
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}