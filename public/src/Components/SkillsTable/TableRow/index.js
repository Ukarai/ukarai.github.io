import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

export const SkillsTableRow = ({ skill }) => {
    return (
        <TableRow>
            <TableCell>{skill.name}</TableCell>
            <TableCell>{skill.rotations}</TableCell>
            <TableCell>{skill.twists}</TableCell>
            <TableCell>{skill.shape.toLowerCase()}</TableCell>
            <TableCell>{skill.tariff}</TableCell>
        </TableRow>
    )
}