import { IUser } from "./IUser";

export interface IUserResponseModel {
    total:number,
    skip:number,
    limit:number,
    users:IUser[],
}