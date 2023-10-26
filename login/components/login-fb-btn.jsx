'use client';

import { Button, Tooltip, Typography, Zoom } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <Tooltip title={'Sign in'} arrow TransitionComponent={Zoom}>
      <Button
        onClick={() => signIn('facebook')}
        variant='contained'
        color='primary'
        fullWidth
        sx={{
          borderRadius: '4px',
          boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: '#3B5998',
          },
        }}
        data-testid='btn-signin-facebook'
      >
        <FacebookIcon sx={{ fontSize: 32, marginRight: 1 }} data-testid='facebook-icon' />
        <Typography variant="button" sx={{ color: 'white' }} data-testid='text-btn-signin-fb'>
          Sign in with Facebook
        </Typography>
      </Button>
    </Tooltip>
  );
}