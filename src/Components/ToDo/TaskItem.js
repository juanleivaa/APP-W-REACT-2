import React from 'react';



import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditIcon from '@mui/icons-material/Edit';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';



export function TaskItem(props) {
    return (
        <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <LabelImportantIcon sx={{ fontSize: 40 }}/>
                </Avatar>
                </ListItemAvatar>


                <ListItemText primary={props.taskToRender.description}
                    className={props.taskToRender.done ? "done" : ""} />
                <ListItemSecondaryAction>
                    

                    {
                        props.taskToRender.done === true
                        ?   <IconButton edge="end" aria-label="delete" onClick={props.setDone}>
                                <ClearIcon color="error" />
                            </IconButton>
                        
                        :   <IconButton edge="end" aria-label="delete" onClick={props.setDone}>
                                <CheckIcon color="success"  />
                            </IconButton>

                          
                    }


                    <IconButton onClick={props.deleteTask} edge="end" aria-label="delete">
                            <DeleteIcon color="secondary"/>
                    </IconButton>
                    <IconButton edge="end" aria-label="edit">
                            <EditIcon color="primary"/>
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    )

    
};

export default TaskItem;