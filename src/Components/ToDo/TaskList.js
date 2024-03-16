import { React } from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



//componente
import{ TaskItem } from './TaskItem'







const TaskList = (props) => {



    console.log(...props.tasksToRender)
    const tasksList = [...props.tasksToRender]  

    const setTaskDone = (indexToSetDone) => {
        
        props.taskToSetDone(indexToSetDone)



        // const newTask = [...tasksList]
        // newTask[indexToSetDone].done = !newTask[indexToSetDone].done
        // props.setTaskDone(newTask)

    }





    return (
            <Grid item xs={12} md={8}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Tareas:
                </Typography>
                <div>
                <List>
                        {
                            tasksList.map((task , index) => {
                                return (
                                    <TaskItem 
                                        taskToRender={task}
                                        key={index} 
                                        deleteTask= {() => props.taskToDelete(index)} 
                                        setDone = {() => setTaskDone(index)} />
                                )
                                
                                
                            })
                        }
                </List>
                </div>
            </Grid>
    );
};

export default TaskList;