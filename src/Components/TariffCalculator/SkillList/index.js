import React from 'react'
import { TariffRow } from '../TariffRow'
import { List } from '@material-ui/core'

export const SkillList = () => {
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <List className="list" >
            {
                rows.map((row) =>
                    <TariffRow
                        key={row}
                        pos={row}
                    />
                )
            }
        </List>
    )
}