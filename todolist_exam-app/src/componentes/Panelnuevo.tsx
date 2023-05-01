import { useState , useEffect , ChangeEvent  } from 'react';
import { ITask, INewPanelProps } from '../interfaces/ITask'
import Card from './Card'
import { IPanelProps } from '../interfaces/IPanel'

function Panelnuevo(props: INewPanelProps) {


    // inicializamos el inpuValue como vacio
    const [inputValue, setInputValue] = useState("")
    // el nombre del panel recibe un arreglo de strings
    const [nombrePanel, setNombrePanel] = useState<string[]>(["TODO"])
   // si se comete un error se mostrara un string al usuario
    const [error, setError] = useState<string[]>([])
    const [showButton, setShowButton] = useState(false);

        //estado de boton
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowButton(e.target.value !== "");
      };

    const addPanel = (inputname: string) => {
        const existente = nombrePanel.includes(inputname);
        if(existente) {
            setError(['El Nombre ya Existe'])
            return
        }
         
        //panel nuevo ala lista
        setNombrePanel([...nombrePanel, inputname])
        setInputValue('')
        setError([])
    };



    // creamos nuestra funcion para eliminar los paneles
    const handleDeleteClick = (nameToDelete: string) => {
        // Evitando que se elimine el panel "TODO"
        if (nameToDelete === "TODO") {
            return;
        }
        const newNames = nombrePanel.filter((name) => name !== nameToDelete);
        setNombrePanel(newNames);
    };


    return (
        <div style={{ textAlign: "center" }} className="newpanel">
        <h2>Agregar nuevo Panel</h2>
        <form>
            <label htmlFor="filtro-tarea">Panel:</label>          
            
            <input type="text" id="newpanel" name="newpanel" placeholder="Nombre de panel Nuevo" value={inputValue} onChange={handleInputChange} />
            {showButton && (
                <button type="button" style={{  backgroundColor: '#039be5 ', border: "30", borderRadius: "55px", color: "white", height: "40px" }} onClick={() => addPanel}  >
                    Add
                </button>
            )}
                    
            <ul>
                <li></li>
            </ul>

        </form>
        
    </div>

    )
 }
//}

export default Panelnuevo;