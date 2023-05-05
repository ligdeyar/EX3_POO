import { IPanelPapelera } from '../interfaces/IPanel'
import Card from './Card'

function Papelera(props: IPanelPapelera) {

    return (
        <div style={{backgroundColor:"#660000"
                    , color:"#ffffff"
                    , padding:"20px"
                    , borderRadius:"10px"
                    , margin:"20px"}}>
            <h2> { props.nombre } </h2>
                {props.tasks.map((task) => (
                    <Card
                        key={task.id}
                        task={task}
                        changeStatus={props.changeStatus}
                        deleteTask={props.deleteTaskDef}
                        status={props.status}
                    />
                ))}
        </div>
    )
}

export default Papelera;