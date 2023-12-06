'use client'

import { Box, Menu, IconButton, Tooltip, MenuList, MenuItem, ListItem, ListItemText, Divider } from '@mui/material';
import { useEffect, useState, Fragment } from 'react';
import { useSession } from 'next-auth/react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { get_datetasks, get_notif } from '@/utils/apinotifications';

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

  // Get data from API notifications
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await get_datetasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

  const dateFormat = (dateTask) => {
    const date = new Date(dateTask);
    const dateCurrent = new Date();

    const diffMilliseconds = date - dateCurrent;

    const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

    
    /* const prueba = `${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}` */
    const day = date.getDate();
    const month = date.toLocaleString('default',{month: 'short'});
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    const concatDay = `${diffDays <= 7 ? 
      `Next ${date.toLocaleString('default',{weekday: 'long'})} ${day},${month} ` 
      : 
      `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`}`;

    const concatTime = `${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}`;
    
    return `${concatDay} - ${concatTime}`;
  };


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
          maxHeight: ITEM_HEIGHT * 4.8,
          maxWidth: '200rem',
					overflow:'visible',
					mt: 1,
				}}
      >
				{/* Menu options */}
        <MenuList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.notification' }}>
            {tasks.map((task) => (
              <Fragment>
                <MenuItem>
                  <ListItem>
                    <ListItemText primary={task.name} secondary={dateFormat(task.due) } />
                  </ListItem>
                </MenuItem>
                <Divider variant='middle'/>
              </Fragment>
            ))}
        
        </MenuList>
      </Menu>
    </Fragment>
  );
}