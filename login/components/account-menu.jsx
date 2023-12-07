'use client'

import { Box, Avatar, Menu, MenuItem, Divider, IconButton, Tooltip } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState, Fragment } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function AccountMenu() {

	const { status, data:session } = useSession();
	// Anchor point for menu
  const [anchorEl, setAnchorEl] = useState(null);
	// Determines if the menu is open
  const open = Boolean(anchorEl);
	// Event management
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
		// Fragment is equal to <> </>
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar 
							alt={session?.user.name} 
							src={session?.user.image}
							data-testid='image-user'
						>
						</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // Menu display animation
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				// Margin management
				sx={{
					overflow:'visible',
					mt: 1.5,
				}}
      >
				{/* Menu options */}
        <MenuItem onClick={handleClose}>
          <Avatar sx={{mr:1, ml:-0.5, width: 32, height: 32}} /> My account
        </MenuItem>

        <Divider variant='middle'/>
                
        {/* To redirect to home from the button */}
        <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
          <ListItemIcon>
            <Logout fontSize="medium" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
