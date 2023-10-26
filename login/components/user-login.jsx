'use client'

import { Avatar, Box, Button, CssBaseline, Grid, Link, Paper, Typography, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SignInBtn from './login-fb-btn';
import Divider from '@mui/material/Divider';


export default function UserLogin() {
    return (
		<Grid container component='main' justifyContent={'center'}>				
			<Grid item xs={12} sm={8} md={4} component={Paper} elevation={10} margin={3}>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: 5,
					}}	
				>
					<Avatar variant='rounded'
						sx={{ margin: 1, backgroundColor: 'secondary.main', width: 60, height:60}} 
						data-testid='avatar'
					>
						<PersonIcon/>
					</Avatar>
					<Typography component='h1' variant='h5'>
						Hello there!
					</Typography>

					<Box component='form' noValidate sx={{ marginTop: 1}}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							inputProps={{ 'data-testid': 'email-user' }}
						/>

						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							inputProps={{ 'data-testid': 'password-user' }}
						/>

						<Button
							type='submit'
							fullWidth
							variant='contained'
							id='btn-signin'
							sx={{ marginTop: 3}}
							data-testid='btn-signin'
						>
							Sign In
						</Button>

						<Divider variant='middle' sx={{ marginY: 2}} />

						<Grid>
							<SignInBtn/>
						</Grid>
						
						<Grid container>
							<Grid item xs sx={{ marginTop: 2}}>
								<Link href='#' variant='body2' data-testid='forgot-pass'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item sx={{ marginTop: 2}}> 
								<Link href='#' variant='body2' data-testid='signup'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
            		</Box>
          		</Box>
        	</Grid>
    	</Grid>
    );
}