'use client'

import { Grid, Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import UserLogin from '@/components/authform';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { status } = useSession();
  return (
    <Grid 
      container
      justifyContent='space-evenly'
      alignItems='center'
      style={{ height: '100vh', marginTop: '-24px' }}
    >
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 2 }} >
                <CardActionArea onClick={() => signIn()} color='inherit'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Create Task
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item2 xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 2 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Task List
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
      {/* {status === 'authenticated' ? (
        <Button onClick={() => signOut()} color='inherit'>Sign Out Este es el Inicio</Button>
        ) : (
          <UserLogin />
      )} */}
    </Grid>
  );
}