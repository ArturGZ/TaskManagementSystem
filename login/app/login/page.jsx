'use client'

import { Grid, CircularProgress, Box } from '@mui/material';
import UserLogin from '../../components/user-login';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'


export default function Login() {
  const { status } = useSession();
  return (
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh', marginTop: '-24px' }}
    >
      {status === 'authenticated' ? (
          // Automatically redirects to home
          redirect('/')
      ) : status === 'loading' ? (
        // While the session state is being updated
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent:'center' }}>
          <CircularProgress color='primary'/>
        </Box>
      ) : (
        // Login Form
        <UserLogin />
      )}
    </Grid>
  );
}