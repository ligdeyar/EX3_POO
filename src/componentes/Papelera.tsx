import { IPanelPapelera } from '../interfaces/IPanel'
import Card from './Card'
import img from '../1598167.png';
function Papelera(props: IPanelPapelera) {

    return (
        <div style={{backgroundColor:"#660000"
                    , color:"#ffffff"
                    , padding:"20px"
                    , borderRadius:"10px"
                    , margin:"20px"}}>
            <center><img src={img}  alt="1598167.png"  width="50" height="50" /></center>

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