export const retriveLocalStorage = <T>(key: string) : T =>{
    const object: string = localStorage.getItem(key) || '';
    if (!object){
        return{} as T;
    }
    const  parse = JSON.parse(object);
    return parse as T;
}