import { useEffect } from "react";
import { loadAuthProducts, refresh } from "../services/api.service";

export const AuthResourcesPage = () =>{
                                                                    //// отримання данних з аутификованоі точки////

    useEffect(() => {

        loadAuthProducts().then(products =>{
                                                                      ////повинна підвантажувати продукти////
            console.log(products)

        }).catch(reason => {
            console.log(reason)

            refresh()
                .then( () => loadAuthProducts())
                .then(value => console.log(value)) ///додатковий запит на продукти///

        })

    }, []);


    return(
        <> Auth Resources Page</>
    )
}



