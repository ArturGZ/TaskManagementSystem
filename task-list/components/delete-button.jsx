import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      style={{
        position: 'fixed',
        bottom: '8px',
        right: '8px',
        borderRadius: '50%',
        minWidth: '128px',
        height: '156px',
      }}
      onClick={onClick}
    >
      <DeleteIcon style={{
        minWidth: '128px',
        height: '128px',
      }}/>
    </Button>
  );
}