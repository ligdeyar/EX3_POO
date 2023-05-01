import React, { useState ,useEffect } from "react";
import { ITask ,IFilterProps } from "../interfaces/ITask";



function Filter(props: IFilterProps){
    const [status, setStatus] = useState('');
    const [selectedTeam, setSelectedTeam] = useState<string>('');

    function validateFilter(){
        if (
            selectedTeam !== 'TODO'  &&
            selectedTeam !== 'Development' &&
            selectedTeam !== 'QA'  &&
            selectedTeam !== 'Ms'  &&
            selectedTeam !== 'BI'  
        ) {
            alert('seleccione un equipo valido')
            return false
        }
        return true
    }       

 //  useEffect(() => {
  //      if (validateFilter()) {
   //       const filteredTasks = props.tasks.filter((task: ITask) => {
  //          return task.team === selectedTeam || selectedTeam === 'TODO';
  //        });
    //      props.onFilterChange(filteredTasks);
  //      }
 //     }, [selectedTeam]);

      
    return(
        <div style={{ textAlign: "center" }} className="filtros">
        <h2>Filtros</h2>
        <form>
            <label htmlFor="filtro-tarea">Equipo:</label>
            <select id="filtro-tarea" value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}  >
                <option value='TODO'>TODO</option>
                <option value='Development'>Development</option>
                <option value='QA'>QA</option>
                <option value='PMs'>PMs</option>
                <option value='BI'>BI</option>
            </select>
        </form>
    </div>
    )
}
export default Filter;