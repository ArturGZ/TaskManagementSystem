'use client';

import { Button, Tooltip, Typography, Zoom } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn } from 'next-auth/react';

export default function SignInFbBtn() {
  return (
    <Tooltip title={'Sign in'} arrow TransitionComponent={Zoom}>
      <Button
        onClick={() => signIn('facebook')}
        variant='contained'
        color='primary'
        fullWidth
        sx={{
          borderRadius: '10px',
          boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.6)',
          '&:hover': {
            backgroundColor: '#3B5998',
          },
        }}
        id='btn-signin-fb'
      >
        <FacebookIcon sx={{ fontSize: 32, marginRight: 1 }} />
        <Typography variant="button" sx={{ color: 'white' }}>
          Sign in with Facebook
        </Typography>
      </Button>
    </Tooltip>
  );
}