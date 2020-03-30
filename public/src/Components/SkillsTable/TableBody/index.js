import React, { useContext } from 'react'
import { TableBody } from '@material-ui/core'
import { GlobalContext } from '../../../Context/GlobalContext'
import { SkillsTableRow } from '../TableRow';

export const SkillsTableBody = () => {
    const { skills } = useContext(GlobalContext);

    return (
        <TableBody>
            {
                skills.map((skill) => {
                    return <SkillsTableRow key={skill.name + Math.random()} skill={skill} />
                })
            }
        </TableBody>
    )
}