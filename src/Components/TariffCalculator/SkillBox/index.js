import React, { useContext } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { GlobalContext } from '../../../Context/GlobalContext'
import '../../../App.css'

export const SkillBox = ({ pos }) => {
    const { skills, routine, addSkillToRoutine } = useContext(GlobalContext);

    const getPreviousLanding = () => {
        if (pos === 1 || typeof routine[pos - 1] === 'undefined') {
            return "FEET";
        } else {
            return routine[pos - 1].landing;
        }
    }

    return (
        <Autocomplete
            options={skills.filter((skill) => { return skill.takeoff === getPreviousLanding() })}
            getOptionLabel={option => option.name}
            onChange={(e, value) => addSkillToRoutine(pos, value)}
            className="tableWidth"
            renderInput={params =>
                <TextField
                    {...params}
                    label={"Skill " + pos}
                    variant="outlined"
                />
            }
        />
    )
}