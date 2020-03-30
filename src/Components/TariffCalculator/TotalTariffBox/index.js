import React, { useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext';

export const TotalTariffBox = () => {
    const { routine } = useContext(GlobalContext);
    let total = 0;

    return (
        <div>
            {
                routine.forEach(element => {
                    if (element !== null) {
                        total += element.tariff;
                    }
                })
            }
            <h2>Total: {total.toFixed(1)}</h2>
        </div>
    )
}