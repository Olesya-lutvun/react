import axioc from "axios";
import { IUserWhithTokens } from "../model/IUserWhithTokens";
import { IProduct } from "../model/IProduct";
import { IProductsResponseModelType } from "../model/IProductsResponseModelType";
import { retriveLocalStorage } from "./helpers";
import { ITokenPair } from "../model/ITokenPair";

type LoginData ={
    username: string,
    password: string,
    expiresInMins: number
}
const axiocInstans = axioc.create({
    baseURL:'https://dummyjson.com/auth',
    headers: {}
});



axiocInstans.interceptors.request.use((requestObject) =>{
    if (requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bear' + retriveLocalStorage<IUserWhithTokens>('user').accessToken
    }
    return requestObject;
})


export const login = async ({username, password, expiresInMins }: LoginData): Promise<IUserWhithTokens> => {  ///приймає об'єкт///
const {data:userWhithTokens} =  await axiocInstans.post <IUserWhithTokens>
('/login', {username, password, expiresInMins})///Запит на ендпоинт. запит поверне відповідь в середині відповіді будуть юзери з токенами ///
    console.log(userWhithTokens)
localStorage.setItem('user', JSON.stringify(userWhithTokens)); ///Сохраняєт в локальное хранилище///
return userWhithTokens;
}

export const  loadAuthProducts = async (): Promise<IProduct[]> =>{  ///Выполняется запрос на сервер по маршруту /products.///

    const {data:{products}} = await axiocInstans.get<IProductsResponseModelType>('/products');  ///Из ответа извлекается массив products из поля data.
///
    console.log(products)    ////  выводит данные в консоль для проверки///
    return products;                      /// возвращает массив products для дальнейшего использования ///

}

export const refresh = async () =>{
    const IUserWhithTokens =retriveLocalStorage<IUserWhithTokens>('user');
  const {data: { accessToken, refreshToken}} = await axiocInstans.post<ITokenPair>('/refresh',
          { refreshToken: IUserWhithTokens.refreshToken, expiresInMin: 1   ///отримали оновлені токени///
});

    IUserWhithTokens.accessToken = accessToken;
    IUserWhithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(IUserWhithTokens))
}


