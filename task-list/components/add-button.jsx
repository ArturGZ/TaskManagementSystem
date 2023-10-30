import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton({ onClick }) {
  return (
    <Button
      data-testid = 'button'
      variant="contained"
      color="primary"
      style={{
        position: 'fixed',
        bottom: '8px',
        left: '8px', 
        borderRadius: '50%',
        minWidth: '128px',
        height: '156px',
      }}
      onClick={onClick}
    >
      <AddIcon data-testid = 'addicon'
      style={{
        minWidth: '128px',
        height: '128px',
      }}/>
    </Button>
  );
}
