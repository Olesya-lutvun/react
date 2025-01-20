import { useEffect, useState } from "react";
import { getCars } from "../services/api.services";
import { ICar } from "../models/ICar";

export const CarsPage =() =>{
   const [cars, setCars] = useState<ICar[]>([]);

       useEffect(() => {
        getCars().then(() =>{
            setCars(cars)
        })
    }, []);


    return(
        <>
            {cars.map((car) =>{
                <div key={car.id}>
                    {car.id} - {car.brand}
                </div>
            })

            }
        </>
    )
}