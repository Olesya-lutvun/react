import {IProduct} from "./IProduct";

export type IProductsResponseModelType = {
    total:number;
    skip:number;
    limit:number;
    products: IProduct[]
    ////мщдуль данних яку віддвє сервер коли запитуєте продукти -об'єкт////
}