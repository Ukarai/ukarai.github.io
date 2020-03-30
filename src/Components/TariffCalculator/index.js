import React from 'react'
import { Header } from './Header'
import { SkillList } from './SkillList'
import { TotalTariffBox } from './TotalTariffBox'
import { ValidateRoutineButton } from './ValidateRoutineButton'

export const TariffCalculator = () => {
    return (
        <div style={{ textAlign: "center", width: "75%", margin: "0 auto" }}>
            <Header />
            <TotalTariffBox />
            <SkillList />
            <div>
                <ValidateRoutineButton />
            </div>
        </div>
    )
}