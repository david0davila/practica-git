import { useState } from "react";
import "./app.scss";


const TaskForm = () => {
    const [taskList, setTaskList] = useState([]);

    const [inputNewTask, setInputNewTask] = useState("");

    const handleOnChangeNewTask = (e) => {
        setInputNewTask(e.target.value);
    };

    const generateId = () => {
        let numberId = 0;

        taskList.forEach((lista) => {
            if (lista.id > numberId) {
                numberId = lista.id;
            }
        });

        return numberId + 1;
    };


    const handleOnClickSaveTask = () => {
        if (inputNewTask.trim().length > 0){

            const newTaskList =  { id : generateId(), listName: inputNewTask };

            setTaskList([...taskList, newTaskList]);

            setInputNewTask("");
        }
    };

    const handleOnClickDeleteTask = (id) => {
        const index = taskList.findIndex((lista) => lista.id === id);

        const currentTaskList = taskList.toSpliced(index, 1);

        setTaskList(currentTaskList);
    };


    return(
        <div>
            <div className="enter__task">
                <label htmlFor="task">Ingresar nueva tarea:</label>

                <input
                    type="text"
                    id="lista"
                    autoFocus
                    value={inputNewTask}
                    onChange={(e) => {handleOnChangeNewTask(e);}} />

                <button onClick={handleOnClickSaveTask}>Guardar Tarea</button>
            </div>


            <div className="list__task">
                <h2>Lista de tareas</h2>
                <ul>
                    {taskList.map((tarea, i) => (
                        <li key={i}>
                            {tarea.listName}
                            <button onClick={() => handleOnClickDeleteTask(tarea.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default TaskForm;
