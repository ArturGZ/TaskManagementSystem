'use client';

import { AppBar, Box, Button, Toolbar, Typography, IconButton } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
    const { status } = useSession();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ boxShadow: 'md' }}>
                <Toolbar>
                    <Button
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </Button>
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                        Kairos
                    </Typography>
                    {status === 'authenticated' ? (
                        <Button onClick={() => signOut()} color='inherit'>Sign Out</Button>
                    ) : (
                        <Button onClick={() => signIn('facebook')} color='inherit'>Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}