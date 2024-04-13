import TaskForm from "./TaskForm";
import "./app.scss";


const App = () => {


    return (
        <>
            <div className="header">
                <h1 className="title">Lista de tareas a realizar</h1>
            </div>

            <TaskForm className="main"/>

            <footer  className="footer">
                <p>&copy Derechos Reservados</p>
            </footer>
        </>
    );
};

export default App;
