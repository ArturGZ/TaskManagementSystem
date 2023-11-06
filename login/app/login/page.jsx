'use client'

import { Grid, Button, Typography, CircularProgress, Box } from '@mui/material';
import UserLogin from '../../components/user-login';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

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
        <>
        <Grid 
          item xs={12} sm={6} md={4} 
          container
          justifyContent='center'
          alignItems='center'
          marginY={8}
        >
          <Button onClick={() => signOut()} color='inherit'>Sign Out</Button>
          <Link href='/'>
              <Button variant='cointained' color='primary' size='small' data-testid='btn-navbar-home'>
                  <Typography variant='body2' component='div' sx={{ flexGrow: 1, color: 'Black' }} data-testid='name-app'>
                      You are logged, Back to home
                  </Typography>
              </Button>
          </Link>
        </Grid>
        </>
      ) : status === 'loading' ? (
        // While the session state is being updated
        <Box sx={{ flexGrow: 1, display: 'flex', alignContent: 'center', justifyContent:'center' }}>
          <CircularProgress color='primary'/>
        </Box>
      ) : (
        <UserLogin />
      )}
    </Grid>
  );
}