import React from 'react'
import { SkillBox } from '../SkillBox'
import { TariffBox } from '../TariffBox'
import { ListItem, Paper } from '@material-ui/core'

export const TariffRow = (props) => {
    return (
        <Paper style={{ marginBottom: "10px" }}>
            <ListItem>
                <SkillBox {...props} />
                <TariffBox {...props} />
            </ListItem>
        </Paper>
    )
}