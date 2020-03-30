import React from 'react';
import { Nav } from '../../Components/Navigation';
import { TariffCalculator } from '../../Components/TariffCalculator';

export const TariffCalculatorPage = () => {
    return (
        <div>
            <Nav />
            <TariffCalculator />
        </div>
    )
}