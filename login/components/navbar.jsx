'use client';

import { AppBar, Box, Button, Toolbar, Typography, CssBaseline, Avatar, colors} from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
    const { status, data:session } = useSession();
    return (
		<Box sx={{ flexGrow: 1 }}>
			<CssBaseline />
			<AppBar position='static' sx={{ boxShadow: 'md' }} data-testid='appbar'>
				<Toolbar sx= {{ justifyContent: 'space-between' }}data-testid='toolbar'>
					<Link href='/'>
						<Button variant='text' size='small' data-testid='btn-navbar-home'>
							<Typography variant='h5' component='div' sx={{ flexGrow: 1, color: 'white' }} data-testid='name-app'>
								Kairos
							</Typography>
						</Button>
					</Link>
					{status === 'authenticated' ? (
						<>
						<Box sx={{flexDirection: 'row',display: 'flex',}}>
							<Avatar alt={session?.user.name} src={session?.user.image}
								sx={{
									marginX: 2
								}}
								data-testid='image-user'
							>
							</Avatar>
							<Button onClick={() => signOut()} variant='outlined' color='inherit' data-testid='btn-signout'>Sign Out</Button>
						</Box>
						</>
					) : (
						<>
						<Link href='/login' >
							<Button variant='outlined' data-testid='btn-signin'>
								<Typography variant='body2' component='div' sx={{ flexGrow: 1, color: 'white' }}>
									Sign In
								</Typography>
							</Button>
						</Link>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
    );
}