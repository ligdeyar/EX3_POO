import { useState, useEffect } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'
import { ITask } from '../interfaces/ITask';


function Panel(props: IPanelProps) {

    const [tasks, setTasks] = useState(props.tasks);
    const [filteredTasks, setFilteredTasks] = useState(props.tasks);
    const [filter, setFilter] = useState(false);


    const handleDeleteClick = () => {
      props.deletePanel(props.nombre);
    };


    //Boton no aparezca si hay tareaas dentro del panel
    const showDeleteButton = (!props.tasks.length &&  props.nombre !== "TODO")//El panel está vacío y no es el panel TODO

    return (
        <div className="columna">
            <h2> { props.nombre } </h2>
              {props.tasks.map((task) => ( 
                <Card
                key={task.id}
                task={task}
                changeStatus={props.changeStatus}
                deleteTask={props.deleteTask}
                status={props.status}
              />
            ))}
            { showDeleteButton && (
              <div>
                <button
                  style={{
                    height: '30px',
                    backgroundColor: 'red',
                    color: 'white',
                    float: 'right',
                    border: 'none',
                    borderRadius: '5px',
                    width: '100px',
                  }}
                  onClick={handleDeleteClick}
                >
                  Eliminar
                </button>
              </div>
            )}   
          </div>
        )
    }

export default Panel;
