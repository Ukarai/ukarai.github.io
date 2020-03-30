import React from 'react'
import { TableHead, TableRow, TableCell, Tooltip } from '@material-ui/core'

export const SkillsTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <Tooltip title="The name of the skill">
                    <TableCell>Name</TableCell>
                </Tooltip>
                <Tooltip title="The total number of 1/4 rotations of the skill">
                    <TableCell>1/4 Rotations</TableCell>
                </Tooltip>
                <Tooltip title="The total number of half twists in the skill">
                    <TableCell>1/2 Twists</TableCell>
                </Tooltip>
                <Tooltip title="The shape the skill is performed in">
                    <TableCell>Shape</TableCell>
                </Tooltip>
                <Tooltip title="The calculated tariff for the skill">
                    <TableCell>Tariff</TableCell>
                </Tooltip>
            </TableRow>
        </TableHead>
    )
}