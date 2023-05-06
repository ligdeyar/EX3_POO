import React from "react";

type FilterChangeEvent = React.ChangeEvent<HTMLSelectElement>;


interface IFiltro{
    keyName: string;
    onChangeSelect: (event: FilterChangeEvent) => void;
    
}

const Filtro = ({ keyName, onChangeSelect}: IFiltro) => {

  // el onChange llama a handleChange cada ves que cambia el valor del select
    const handleChange = (event: FilterChangeEvent) => {
        onChangeSelect(event);
    
    }
    return (
      <div >
        <h2>Filtros</h2> 
        <div style={{width:"400px"
                  , marginTop:"20px"
                  , backgroundColor:"#333333"
                  , padding:"20px"
                  , borderRadius:"10px" }}>
            <label >Equipo:</label>
            <select value={keyName} onChange={handleChange}>
              <option>Todos</option>
              <option value="Development">Development</option>
              <option value="QA">QA</option>
              <option value="PM">PM</option>
              <option value="BI">BI</option>
            </select>
        </div>
      </div>
    );
}
export default Filtro;