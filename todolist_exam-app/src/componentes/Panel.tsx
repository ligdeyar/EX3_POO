import { useState } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'

function Panel(props: IPanelProps) {

    return (
        <div className="columna">
            <h2> { props.title } </h2>
            <button type="button" style={{  backgroundColor: 'red', border: "30", borderRadius: "5px", color: "white", height: "40px" , padding: '10px'}}>
                   Eliminar
            </button>
            {  
                props.tasks.map((task) => {
             
                    return (
                        <Card 
                            task={task} 
                            changeStatus={props.changeStatus} 
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }
        </div>
    )
}

export default Panel;