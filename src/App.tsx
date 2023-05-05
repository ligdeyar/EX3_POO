import { useState, useEffect } from 'react';
import './App.css';

import { ITask } from './interfaces/ITask'

import Panel from './components/Panel' 
import Filtro from './components/Filtro';
import TaskForm from './components/TaskForm'
import Papelera from './components/Papelera';
import AddPanel from './components/CrearPanel';

function App() {

  const [id, setId] = useState<number>(0)
  const [paneles, setPaneles] = useState<string[]>([]);
  const [task, setTask] = useState<ITask>({ "status": "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [filtro, setFiltro] = useState<string>("");
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])
  const Options: string[] = ["TODO", ...paneles, "Papelera"];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  // FUNCION PARA AGREGAR PANEL
  const handleAddPanel = (title: string) => {
    setPaneles([...paneles, title]);
    setTask({ ...task, status: title });
  }

  // FUNCION PARA CAMBIAR EL STATUS DEL PANEL
  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.status = status
      }
      return task
    })
    setTaskList(newTaskList)
  }

  // FUNCION PARA ENVIAR UNA TAREA A LA PAPELERA
  const deleteTask = (id: number) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.status = "Papelera";
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  // FUNCION PARA BORRAR DEFINITIVAMENTE UNA TAREA
  const deleteTaskDef = (id: number) => {
    const newTaskList = taskList.filter(task => task.id !== id)
    setTaskList(newTaskList)
    alert("Tarea eliminada por completo")
  }
  
  // FUNCION PARA BORRAR UN PANEL
  const deletePanel = (title: string) => {
    const tasksInPanel = manejoFiltros.filter((task) => task.status === title);
    if (tasksInPanel.length === 0) {
      const newPanels = paneles.filter((panelTitle) => panelTitle !== title);
      setPaneles(newPanels);
    } else {
      alert("El panel no se puede eliminar porque todavía tiene tareas.");
    }
  };

  // FILTRAMOS LA LISTA DE TAREAS
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltro(e.target.value);
  };
  // los resultados los guardamos en el manejoFiltros
  const manejoFiltros: ITask[] = [];
  //con el bluce iteramos y obtenemos los nombres y equipos de las tareas 
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const taskName = task.name?.toLowerCase();
    const taskTeam = task.team?.toLowerCase();
    const filterLower = filtro.toLowerCase();

    if (taskName && taskName.includes(filterLower)) {
      manejoFiltros.push(task);
    } else if (taskTeam && taskTeam.includes(filterLower)) {
      manejoFiltros.push(task);
    }
  }

  const addTask = () => {
    setTaskList([...taskList, task])
    const newId: number = id + 1
    setId(newId)

    setTask({
      "id": newId
      , "status": "TODO"
      , "name": ""
      , "team": ""
      , "hours": 0
    })
  }


  return (
    <div className="App">

      <header>
        <h1>TODO List</h1>
      </header>

      <div className="container">
        
      <AddPanel añadirPanel={handleAddPanel} paneles={paneles || []} />

        <TaskForm
          task={task}
          teams={teams}
          onChangeInput={handleInputChange}
          onChangeSelect={handleSelectChange}
          onSave={addTask}
        />

        <Filtro keyName={filtro} onChangeSelect={onChange} />

        <div className="columnas">  
            <Panel
              nombre={"TODO"}
              tasks={manejoFiltros.filter((task) => task.status === "TODO")}
              changeStatus={changeStatus}
              status={Options}
              deleteTask={deleteTask}
              deletePanel={deletePanel}
            />

          {paneles.map((panelTitle) => (
            <Panel
              nombre={panelTitle}
              tasks={manejoFiltros.filter((task) => task.status === panelTitle)}
              status={Options}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
              deletePanel={deletePanel}
              />
              ))}
        </div>

        <div style={{width:"500px"}}>
          <Papelera
            nombre={"Papelera"}
            tasks={manejoFiltros.filter((task) => task.status === "Papelera")}
            status={Options}
            changeStatus={changeStatus}
            deleteTaskDef={deleteTaskDef}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

