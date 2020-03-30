import React, { useContext } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';

export const TariffBox = ({ pos }) => {
    const { routine } = useContext(GlobalContext);

    return (
        <div style={{
            width: "30px",
            height: "54px",
            textAlign: "center",
            lineHeight: "3",
            flexGrow: "2",
            border: "1px solid #BABABA",
            borderRadius: "4px"
        }}>
            {
                (typeof routine[pos] !== 'undefined' && routine[pos] !== null) ? routine[pos].tariff : 0
            }
        </div >
    )
}