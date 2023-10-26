'use client'

import { Grid, Button, Typography } from '@mui/material';
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
        <Button onClick={() => signOut()} color='inherit'>Sign Out</Button>
        <Link href='/'>
            <Button variant='cointained' color='primary' size='small' data-testid='btn-navbar-home'>
                <Typography variant='body2' component='div' sx={{ flexGrow: 1, color: 'Black' }} data-testid='name-app'>
                    You are logged, Back to home
                </Typography>
            </Button>
        </Link>
        </>
      ) : (
        <UserLogin />
      )}
    </Grid>
  );
}