'use client'

import { Drawer, Box, Typography, IconButton, Divider, Tooltip } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PlaylistAdd, Checklist, Home, AddTask, Close } from '@mui/icons-material';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function DrawerMenu() {
    
	const { data: session } = useSession();

	// Determines if the drawer is open
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// Event management
	const handleClick = (event) => {
		setIsDrawerOpen(true);
	};
	const handleClose = () => {
		setIsDrawerOpen(false);
	};

	const drawerWidth = 230;

	return (
		<>
		<Tooltip title="Menu">
			<IconButton 
				size='large' 
				edge='start' 
				aria-label='menu' 
				sx={{ml:-1.5, color: 'white'}}
				onClick={handleClick}
			>
				<MenuIcon />
			</IconButton>
		</Tooltip>
		{/* Show side panel */}
		<Drawer 
			anchor='left' 
			open={isDrawerOpen} 
			onClose={handleClose}
			variant='temporary'
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
		>
			<Box sx={{justifyContent:'flex-end', display:'flex', mr:1 }}>
				<IconButton onClick={handleClose} >
					<Close />
				</IconButton>
			</Box>
			
			{/* Panel header */}
			<Box textAlign='center' role='presentation'>
				<Typography variant='h6' component='div'> 
					Menu
				</Typography> 
			</Box>

			<Divider variant='middle' sx={{my: 1}}/>

			{/* Panel options */}
			<List>
			<ListItem key='Home' disablePadding>
					<ListItemButton href='/'>
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						<ListItemText primary='Home' />
					</ListItemButton>
				</ListItem>

				<ListItem key='Add task' disablePadding>
					{/* If the user is unauthenticated, it goes to the login */}
					<ListItemButton href={session ? '/tasks': '/login'}>
						<ListItemIcon>
							<AddTask />
						</ListItemIcon>
						<ListItemText primary='Add task' />
					</ListItemButton>
				</ListItem>

				<ListItem key='Task list' disablePadding>
					<ListItemButton href={session ? '/task-list': '/login'}>
						<ListItemIcon>
							<Checklist />
						</ListItemIcon>
						<ListItemText primary='Task list' />
					</ListItemButton>
				</ListItem>

				<ListItem key='Create task list' disablePadding>
					<ListItemButton href={session ? '/create-task-list': '/login'}>
						<ListItemIcon>
							<PlaylistAdd />
						</ListItemIcon>
						<ListItemText primary='Create task list' />
					</ListItemButton>
				</ListItem>
      </List>

			{/* This pushes the following content to the bottom */}
			<Box sx={{flex:1}}></Box>

			<Divider variant='middle'/>
			<Box sx={{ justifyContent:'center', display:'flex', my:1}}>
				<Typography variant='overline' component='div'> 
					Kairos v1.2.0
				</Typography> 
			</Box>
		</Drawer>
		</>
	);
}