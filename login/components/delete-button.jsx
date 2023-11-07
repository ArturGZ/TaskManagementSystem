import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteButton({ onClick }) {
  return (
    <Button
      data-testid = 'button'
      variant="contained"
      color="secondary"
      style={{
        position: 'fixed',
        bottom: '2%',
        right: '5%',
        borderRadius: '50%',
        width: 'auto',
        height: 'auto',
        padding: '3%',
      }}
      onClick={onClick}
    >
      <DeleteIcon data-testid = 'delicon'
      style={{
        fontSize: '400%',
      }}/>
    </Button>
  );
}
