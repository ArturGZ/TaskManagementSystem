import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';


export default function TaskStatusToggleButtons({ fetchTaskListsWithFilteredTasks }) {
  const [status, setStatus] = useState(0);

  // Verifies what buttons is pressed
  const handleStatusChange = (event, newStatus) => {
    if (newStatus !== status) {
      setStatus(newStatus);
      fetchTaskListsWithFilteredTasks(newStatus);
    } else if (newStatus === status) {
      setStatus(0);
      fetchTaskListsWithFilteredTasks(0);
    }
  };

  const buttonSizes = {
    small: {
      fontSize: '0.7rem', // Small screens
    },
    medium: {
      fontSize: '0.9rem', // Medium screens
    },
    large: {
      fontSize: '1.0rem', // Large screens
    },
    xlarge: {
      fontSize: '1.2rem', // Extra large screens
    },
  };

  const iconSizes = {
    small: {
      fontSize: '0.9rem', // Small screens
    },
    medium: {
      fontSize: '1.2rem', // Medium screens
    },
    large: {
      fontSize: '1.3rem', // Large screens
    },
    xlarge: {
      fontSize: '1.5rem', // Extra large screens
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        alignItems="right"
        justifyContent="flex-start"
        marginLeft={{ xs: 2, sm: 5, md: 9, lg: 13 , xl: 13}}
        marginTop={1}
        marginBottom={1}
      >
        <ToggleButtonGroup
          value={status}
          exclusive
          onChange={handleStatusChange}
          aria-label="Task Status"
        >
          <ToggleButton value={1} aria-label="Complete" sx={{
            width: '100%',
            ...buttonSizes.small,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.light.contrastText,
            [theme.breakpoints.between('sm', 'md')]: {
              ...buttonSizes.medium,
            },
            [theme.breakpoints.between('md', 'lg')]: {
              ...buttonSizes.large,
            },
            [theme.breakpoints.up('lg')]: {
              ...buttonSizes.xlarge,
            },
          }}>
            <DoneAllIcon sx={{
              ...iconSizes.small,
              color: theme.palette.primary.light.contrastText,
              [theme.breakpoints.between('sm', 'md')]: {
                ...iconSizes.medium,
              },
              [theme.breakpoints.between('md', 'lg')]: {
                ...iconSizes.large,
              },
              [theme.breakpoints.up('lg')]: {
                ...iconSizes.xlarge,
              },
            }} />
            Complete
          </ToggleButton>
          <ToggleButton value={2} aria-label="Pending" sx={{
            width: '100%',
            ...buttonSizes.small,
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.light.contrastText,
            [theme.breakpoints.between('sm', 'md')]: {
              ...buttonSizes.medium,
            },
            [theme.breakpoints.between('md', 'lg')]: {
              ...buttonSizes.large,
            },
            [theme.breakpoints.up('lg')]: {
              ...buttonSizes.xlarge,
            },
          }}>
            <PriorityHighIcon sx={{
              ...iconSizes.small,
              color: theme.palette.primary.light.contrastText,
              [theme.breakpoints.between('sm', 'md')]: {
                ...iconSizes.medium,
              },
              [theme.breakpoints.between('md', 'lg')]: {
                ...iconSizes.large,
              },
              [theme.breakpoints.up('lg')]: {
                ...iconSizes.xlarge,
              },
            }} />
            Pending
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </ThemeProvider>
  );
}