import { Fragment, useState } from 'react';
import Container from '@mui/material/Container';


//COMPONENTS
import AddTask from './Components/ToDo/AddTask';
import TaskList from './Components/ToDo/TaskList';



//STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//===================================
//====fuente roboto material ui======
//====================================
import '@fontsource/roboto/300.css'; // peso ligero (300)
import '@fontsource/roboto/400.css'; // peso normal (400)
import '@fontsource/roboto/500.css'; // peso medio (500)
import '@fontsource/roboto/700.css'; // peso negrita (700)

//===================================
//=========material ui comp===========
//====================================
import { Grid } from '@mui/material';





function App() {
  //BUSCO SI HAY ALGUN ELEMENTO EN EL LOCALSTORAGE OO SINO INICIALIZO UN ARRAY VACIO
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || []
  const [tasks , setTasks] = useState([localTasks]);
  const handleAddTask = (addtTask) => {
    const newTask = [...tasks]
    newTask.push({description: addtTask, done:false })
    localStorage.setItem('tasks', JSON.stringify(newTask))
    setTasks(newTask)

  }


  const handleDelTask = (delTask) => {
    const updTask = tasks.filter((el, index) => index !== delTask)
    const forEachTask = []
    tasks.forEach((el, index) => {
      if(index !== delTask){
        forEachTask.push(el)
      }
    })
    setTasks(forEachTask)
    localStorage.setItem('tasks', JSON.stringify(forEachTask))
  }


  function handleSetDone(index) {
    const updatedTasks = tasks.map((task, i) => {
        if(i === index){
          task.done = !task.done
        }
        return task
    })
    setTasks(updatedTasks)
  }



  
  return (
    <Fragment>
          <Grid container>


            {/* //COLUMNA 1 */}
            <Grid item xs={12} lg={6}>
                <AddTask handleAddTaskParent={handleAddTask}></AddTask>
                <TaskList 
                  tasksToRender={tasks} 
                  taskToDelete={handleDelTask} 
                  taskToSetDone={handleSetDone}  
                ></TaskList>
            </Grid>

            {/* //COLUMNA 2 */}
            <Grid item xs={12} lg={6}>
                <h1 className='my-5 text-center'>Usuarios desde API </h1>
            </Grid>


          </Grid>
    </Fragment>
  );
}

export default App;
