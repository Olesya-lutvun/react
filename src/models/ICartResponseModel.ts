import { ICart } from "./ICart";

export interface ICartResponseModel {
    total:number,
    skip:number,
    limit:number,
    carts:ICart[],
}