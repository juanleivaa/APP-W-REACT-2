import { React , Fragment , useState } from 'react';
import Button from '@mui/material/Button';




const AddTask = (props) => {

    // const [listaTareas, setListaTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    //agregar una tarea a una lista de tareas
    const handleSubmit = (e) => {
        e.preventDefault()
        //llamo a la prop compartida con mi componente padre que es una funcion
        props.handleAddTaskParent(tarea)
        //limpiar el input
        setTarea("")
    };





    //para ver todo lo que se escribe en el input
    const capturarTarea = (e) => {
        console.log(e.target.value)
        setTarea(e.target.value)
    };



    return (
        <Fragment>
            <h1 className='my-5 text-center'>Lista tareas </h1>
            <div className="container my-5 d-flex justify-content-center">
                <form className="w-75" onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tarea 1"
                            onChange={capturarTarea}
                            value={tarea}
                        />
                        <button className="btn btn-outline-dark" type="submit">
                            Agregar
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>

    );
};

export default AddTask;