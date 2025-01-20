import { useEffect, useState } from "react";
import { getCars } from "../services/api.services";
import { ICar } from "../models/ICar";
import { CarItem } from "../components/CarItem";

export const CarsPage =() =>{
   const [cars, setCars] = useState<ICar[]>([]);

   useEffect(() => {
        getCars().then((result) =>{
            setCars(result);
        });
    }, []);

    return(
        <>
            {
                cars.map((car) => (
                    <CarItem key={car.id} item={car} />
                ))
            }
        </>
    )
}