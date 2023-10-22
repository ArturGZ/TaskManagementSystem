'use client'

import { Grid } from '@mui/material';
import UserLogin from '@/components/authform';

export default function Login() {
  return (
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', marginTop: '-24px' }}
    >
      <UserLogin />
    </Grid>
  );
}