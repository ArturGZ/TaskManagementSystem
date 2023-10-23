'use client'

import { Grid, Button } from '@mui/material';
import UserLogin from '@/components/authform';
import { useSession, signIn, signOut } from 'next-auth/react';

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
        <Button onClick={() => signOut()} color='inherit'>Sign Out</Button>
        ) : (
          <UserLogin />
      )}
    </Grid>
  );
}