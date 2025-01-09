import { ITodo } from "../../models/ITodo";
import './todo.css'

interface TodoProps{
    item:ITodo
}

export const Todo =({item}: TodoProps) =>{
    return(
    <div>
        <h3 className={item.completed? 'complete' :  'non-complete' }>{item.todo}</h3>
    </div>
    );
};