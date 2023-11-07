import React from 'react';
import { Fab, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const buttonStyle = {
  position: 'fixed',
  bottom: 0, 
  left: '50%', 
  transform: 'translateX(-50%)', 
  borderRadius: '50%', 
};

export default function ToggleButton({ onClick, showBigButtons }) {
  return (
    <Box data-testid = 'box' style={{ textAlign: 'center' }}>
      <Fab data-testid = 'fab'
        style={buttonStyle}
        color="primary"
        onClick={onClick}
        aria-label="toggle"
      >
        {showBigButtons ? <ArrowDropDownIcon data-testid = 'arrowdropdownicon' /> : <ArrowDropUpIcon data-testid = 'arrowdropupicon'/>}
      </Fab>
    </Box>
  );
}

