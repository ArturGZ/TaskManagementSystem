'use client'

import { Box, Menu, IconButton, Tooltip, MenuList, ListItem, ListItemText, Divider } from '@mui/material';
import { useState, Fragment } from 'react';
import { useSession } from 'next-auth/react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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

  const ITEM_HEIGHT = 95;

  return (
    // Fragment is equal to <> </>
    <Fragment>
      <Box >

        <Tooltip title="Notifications">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'notifications-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{mr: 1, color: 'whitesmoke'}}
          >
            <NotificationsNoneIcon fontSize='large'/>

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
        // Style
				// Margin management
				sx={{
          maxHeight: ITEM_HEIGHT * 4.5,
          maxWidth: '200rem',
					overflow:'visible',
					mt: 1,
				}}
      >
				{/* Menu options */}
        <MenuList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemText primary="Task 1 with large tittle for test of width" secondary="15/12/2023" />
            </ListItem>
            <Divider variant='middle'/>
            <ListItem>
                <ListItemText primary="Task 2" secondary="18/12/2023" />
            </ListItem>
            <Divider variant='middle'/>
            <ListItem>
                <ListItemText primary="Task 3" secondary="15/01/2024" />
            </ListItem>
            <Divider variant='middle'/>
            <ListItem>
                <ListItemText primary="Task 4" secondary="15/01/2024" />
            </ListItem>
            <Divider variant='middle'/>
            <ListItem>
                <ListItemText primary="Task 5" secondary="15/01/2024" />
            </ListItem>
        </MenuList>
      </Menu>
    </Fragment>
  );
}