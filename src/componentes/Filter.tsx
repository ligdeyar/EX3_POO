import React from "react";

type FilterChangeEvent = React.ChangeEvent<HTMLSelectElement>;


interface IFilter{
    keyName: string;
    onChangeSelect: (event: FilterChangeEvent) => void;
    
}

const Filter = ({ keyName, onChangeSelect}: IFilter) => {

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
              <option value="">Todos</option>
              <option value="Development">Development</option>
              <option value="QA">QA</option>
              <option value="PM">PM</option>
              <option value="BI">BI</option>
            </select>
        </div>
      </div>
    );
}
export default Filter;