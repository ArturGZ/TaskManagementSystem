'use client'

import { Avatar, Box, Button, CssBaseline, Grid, Link, Paper, Typography, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SignInFbBtn from './login-fb-btn';
import Divider from '@mui/material/Divider';


export default function UserLogin() {
    return (
			     
			<Grid container component='main' justifyContent={'center'}>
					<CssBaseline />
				
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
						<Avatar sx={{ margin: 1, backgroundColor: 'secondary.main', width: 60, height:60}} variant='rounded'>
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
							/>

							<Button
								type='submit'
								fullWidth
								variant='contained'
								id='btn-signin'
								sx={{ marginTop: 3, marginBottom: 2 }}
							>
								Sign In
							</Button>

							<Divider variant='middle' />

							<Grid sx={{ marginY: 2}} >
								<SignInFbBtn/>
							</Grid>
							
							<Grid container>
								<Grid item xs>
									<Link href='#' variant='body2' >
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href='#' variant='body2' >
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