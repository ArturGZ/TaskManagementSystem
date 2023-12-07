'use client';

// Common navigation bar for all modules

import { AppBar, Box, Button, Toolbar, Zoom, Typography, CssBaseline } from '@mui/material';
import { Tooltip, CircularProgress  } from '@mui/material';
import { useSession, Fragment } from 'next-auth/react';
import Link from 'next/link';
import AccountMenu from './account-menu';
import DrawerMenu from './drawer-menu';
import Notifications from './notifications';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

export default function Navbar() {

    const { status, data:session } = useSession();
		try{
			const userPhoto = session?.user.image;
		} catch (e){
			console.warn('A problem occurred while obtaining the user photo');
		}

    return (
		<ThemeProvider theme={theme}>
			<Box sx={{ flexGrow: 1 }}>
				<CssBaseline />	{/* Eliminate unwanted margins */}
				
				<AppBar position='static' sx={{ boxShadow: 'md' }} data-testid='appbar'>
					<Toolbar sx= {{ justifyContent: 'space-between' }} data-testid='toolbar'>

						<Box alignItems='center'>
							{/* For the side panel */}
							<DrawerMenu />

							<Link href='/'>
								<Tooltip title={'Kairos'} arrow TransitionComponent={Zoom}>
									<Button variant='text' size='small' data-testid='btn-navbar-home'>
										<Typography variant='h5' sx={{ flexGrow: 1, color: 'white' }} data-testid='name-app'>
											Kairos
										</Typography>
									</Button>
								</Tooltip>
							</Link>
						</Box>

						{/* Dynamic part of navbar */}
						{status === 'authenticated' ? (
							<>
								<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
									<Notifications/>
									<AccountMenu/>
								</Box>
							</>
						) : status === 'loading' ? (
							<CircularProgress color='inherit'/> // While getting the session state
						) : (
							<>
							<Link href='/login' >
								<Button variant='outlined' data-testid='btn-signin'>
									<Typography variant='body2' sx={{ flexGrow: 1, color: 'white' }}>
										Sign In
									</Typography>
								</Button>
							</Link>
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
    );
}