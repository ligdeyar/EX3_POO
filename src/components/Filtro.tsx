import React from "react";

type FilterChangeEvent = React.ChangeEvent<HTMLSelectElement>;

interface IFiltros {
  keyName: string;
  onChangeSelect: (event: FilterChangeEvent) => void;
}

const Filtro = ({ keyName, onChangeSelect }: IFiltros) => {
  
  return (
    <div >
      <h2>Filtros</h2> 
      <div style={{width:"400px"
                , marginTop:"20px"
                , backgroundColor:"#333333"
                , padding:"20px"
                , borderRadius:"10px" }}>
          <label >Equipo:</label>
          <select value={keyName} onChange={onChangeSelect}>
            <option value="">Todos</option>
            <option value="Development">Development</option>
            <option value="QA">QA</option>
            <option value="PM">PM</option>
            <option value="BI">BI</option>
          </select>
      </div>
    </div>
  );
};

export default Filtro;
