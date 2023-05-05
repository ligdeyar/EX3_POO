import { useState } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'

function Panel(props: IPanelProps) {

    const [tasks, setTasks] = useState(props.tasks);

    const handleDeleteClick = () => {
      props.deletePanel(props.nombre);
    };


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
              ))
              }

            {props.nombre !== 'TODO' && (
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
                        onClick={handleDeleteClick}>
                        Eliminar
                      </button>
                    </div>
                  )}
        </div>
    )
}

export default Panel;

