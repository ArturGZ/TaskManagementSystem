'use client'

import { Box, Menu, IconButton, Tooltip, MenuList, ListItem, ListItemText } from '@mui/material';
import { useState, Fragment } from 'react';
import { useSession } from 'next-auth/react';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Notifications() {
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
    //sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
    <Fragment>
      <Box >

        <Tooltip title="Notifications">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'notifications-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <NotificationsIcon fontSize='large' >
            </NotificationsIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="notification-menu"
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
        <MenuList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemText primary="Tarea 1" secondary="15/12/2023" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Tarea 2" secondary="18/12/2023" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Tarea 3" secondary="15/01/2024" />
            </ListItem>
        </MenuList>
      </Menu>
    </Fragment>
  );
}