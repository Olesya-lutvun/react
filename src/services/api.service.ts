import { IUserResponse } from "../models/IUserResponse";

const url = 'https://dummyjson.com'


export const getUsers =  async (page:string): Promise<IUserResponse> => {


    const limit = 30;
    const skip = limit* (+page) -limit;
        const response = await fetch(url + '/users'+ '?skip='+ skip)
            .then(value => value.json())
    return response;

};