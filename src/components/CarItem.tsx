import { FC } from 'react';
import { ICar } from '../models/ICar';

interface ICarItemProps {
    item: ICar;
}

export const CarItem: FC<ICarItemProps> = ({
    item,
}) => {
    return (
        <div className='car-item'>
            <span className='car-item__id'>
                {item.id}
            </span>
            <span> - </span>
            <span className='car-item__brand'>
                {item.brand}
            </span>
        </div>
    );
};