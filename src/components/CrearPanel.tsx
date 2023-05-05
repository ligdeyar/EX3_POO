import React, { useState } from 'react';

export interface CrearPanel {
  añadirPanel: (title: string) => void;
  paneles: string[]; 
}

function CrearPanel(props: CrearPanel) {
  
  const [inputValue, setInputValue] = useState('');
  const [nombresExistentes, setNombresExistentes] = useState<string[]>([]);
  
  const validateForm=()=>{

      const inputName = inputValue.trim().toLowerCase();
      
      if (!nombresExistentes.includes(inputName)) {
        props.añadirPanel(inputName);
        setInputValue('');
      }
  }

  return (
    <div>
      <h2>Agregar nuevo Panel</h2>
      <div 
        style={{backgroundColor:"#333333"
              , width:"380px"
              , marginTop:"30px"
              , padding:"20px"
              , borderRadius:"10px"}}>

          <label>Panel:</label>
          <input
            type="text"
            placeholder="Mi nuevo Panel"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {(() => {
            if (inputValue.trim() === '' || 
                inputValue.trim().toLowerCase() === 'todo'  || 
                inputValue.trim().toLowerCase() === 'papelera') {
              return null;
            }

            if (props.paneles.some(
                (panel) => panel.trim().toLowerCase() === inputValue.trim().toLowerCase()
              )
              ) {
              return (
                <div className="error-card">
                  El nombre ya existe
                </div>
              );

            } else {
              return (
                <button type="button" onClick={validateForm}>
                  Add
                </button>
              );
            }
          })()}
      </div>
    </div>
  );
}

export default CrearPanel;
