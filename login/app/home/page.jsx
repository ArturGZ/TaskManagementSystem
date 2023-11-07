'use client'

import { Grid, Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { useSession } from 'next-auth/react';


export default function Home() {
	const { data: session } = useSession();
  return (
    <Grid 
      container
      justifyContent='center'
      alignItems='center'
      marginY={8}
    >
			<Grid item xs={12} sm={6} md={4}>
				<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 4, my:8 }} >
					{/* If user is authenticated go to correct page else go to login*/}
					<Link href={session ? '/tasks': '/login'} style={{textDecoration: 'none'}}>
						<CardActionArea>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div" color='black'>
										Create Task
								</Typography>
								<Typography variant="body2" color="text.secondary">
										Add new task to a task list, including fields for title,
										description, due date and status.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Link>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 4 }}>
					<Link href={session ? '/task-list': '/login'} style={{textDecoration: 'none'}}>
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
					<Link href={session ? '/create-task-list': '/login'} style={{textDecoration: 'none'}}>
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