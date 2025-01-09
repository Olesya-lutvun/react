import { ITodoRespons } from "../models/ITodoRespons"
const url = import.meta.env.VITE_API_URL;


const getAllTodos = async ():Promise < ITodoRespons> => {
    const todoResponsObject = await fetch(url + '/todos')
        .then(value => value.json())
    return todoResponsObject;
}


export {
    getAllTodos
}