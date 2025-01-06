import {ICharecter} from "../../models/ICharecter.ts";
import {ReactNode} from "react";
import './charecter-componemt.css'
interface CharecterComponentProps {
    item?: ICharecter
    children: ReactNode,
    
}
export const CharecterComponent = ({item, children}: CharecterComponentProps) =>{
    return(
        <div className='my-10 border-2 border-b-cyan-500'>
            <h3 className='text-2xl text-cyan-500'>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};