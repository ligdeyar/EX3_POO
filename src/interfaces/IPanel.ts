
import { ITask } from "./ITask";


export interface IPanelProps {
    nombre: string;
    tasks: ITask[];
    status: string[]
    changeStatus: (id: number, status: string) => void;
    deleteTask: (id: number) => void;
    deletePanel: (nombre:string) => void;
}
export interface IPanelPapelera {
    nombre: string;
    tasks: ITask[];
    status: string[]
    changeStatus: (id: number, status: string) => void;
    deleteTaskDef: (id: number) => void;
}