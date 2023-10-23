'use client';

import { AppBar, Box, Button, Toolbar, Typography, CssBaseline, Avatar} from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
    const { status, data:session } = useSession();
    return (
			<Box sx={{ flexGrow: 1 }}>
				<CssBaseline />
				<AppBar position='static' sx={{ boxShadow: 'md' }} data-testid='appbar'>
					<Toolbar data-testid='toolbar'>
						<Typography variant='h5' component='div' sx={{ flexGrow: 1, marginX: 2 }} data-testid='name-app'>
							Kairos
						</Typography>
						{status === 'authenticated' ? (
							<>
								<Avatar alt={session?.user.name} src={session?.user.image}
									sx={{
										marginX: 2
									}}
									data-testid='image-user'
								>
								</Avatar>
								<Button onClick={() => signOut()} variant='outlined' color='inherit' data-testid='btn-signout'>Sign Out</Button>
							</>
						) : (
							<Button onClick={() => signIn('facebook')} variant='outlined' color='inherit' data-testid='btn-signin'>Sign In</Button>
						)}
					</Toolbar>
				</AppBar>
			</Box>
    );
}