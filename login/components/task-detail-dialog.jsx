'use client'

import { useState, Fragment, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import { get_notif } from '@/utils/apinotifications';

export default function TaskDetailDialog({open,onClose, due, name, status}) {   

    /* const [tasks_id, setTasks] = useState([]);

    useEffect(() => {
        const fetchTask = async() => {
        try {
            const data = await get_notif(listId, taskId);
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
        }

        fetchTask();
    }, [listId, taskId]); */

    const dateFormat = (dateTask) => {
        const date = new Date(dateTask);
        const dateCurrent = new Date();
    
        const diffMilliseconds = date - dateCurrent;
    
        const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
    
        const day = date.getDate();
        const month = date.toLocaleString('default',{month: 'long'});
        const year = date.getFullYear();
        const hour = date.getHours();
        const min = date.getMinutes();
    
        const concatDay = `${diffDays <= 7 ? 
          `Next ${date.toLocaleString('default',{weekday: 'long'})} ${day},${month} ` 
          : 
          `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`}`;
    
        const concatTime = `${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}`;
        
        return `To do ${concatDay} - ${concatTime}`;
      };

    return (
    <Fragment>
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                {dateFormat(due)}
                </DialogContentText>
                    <Divider sx={{my:1.5, mx:1}} variant='middle'/>
                    Status: {status}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
    );
}