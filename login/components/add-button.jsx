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
        bottom: '2%',
        left: '5%',
        borderRadius: '50%',
        width: 'auto',
        height: 'auto',
        padding: '3%',
      }}
      onClick={onClick}
    >
      <AddIcon data-testid = 'addicon'
      style={{
        fontSize: '400%',
      }}/>
    </Button>
  );
}
