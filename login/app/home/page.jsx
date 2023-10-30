'use client'

import { Grid, Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { status } = useSession();
  return (
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      marginY={8}
    >
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 4, my:8 }} >
				<Link href='/' style={{textDecoration: 'none'}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color='black'>
                                Create Task
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
				</Link>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 4 }}>
                <Link href='/' style={{textDecoration: 'none'}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color='black'>
                                Task List
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Display a list of task lists created by you, allowing management of tasks.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 4, my: 8 }}>
                <Link href='/' style={{textDecoration: 'none'}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color='black'>
                                Create Task List
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Will be able to create new task lists, providing a name, and description and customizing the color of the list.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </Grid>
    </Grid>
  );
}