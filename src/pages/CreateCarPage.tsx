import { useForm } from "react-hook-form";
import { ICar } from "../models/ICar";
import { CarValidator } from "../validators/CarValidator";
import { addCar } from "../services/api.services";
import { joiResolver } from "@hookform/resolvers/joi";


export const CreateCarPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    });

    const createHendler = (data: ICar) => {
        addCar(data)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(createHendler)}>
            <div>
                <input type="text"{...register('brand')}/>
                <div>{errors.brand?.message}</div>
            </div>
            <div>
                <input type="number"{...register('prise')}/>
                <div>{errors.prise?.message}</div>
            </div>
            <div>
                <input type="number"{...register('year')}/>
                <div>{errors.year?.message}</div>
            </div>
            <button>save car</button>

        </form>
    )
}


