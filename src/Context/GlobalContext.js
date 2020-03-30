import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
import { loadSkillsFromFile } from '../Utils/Utils'

const initialState = {
    skills: loadSkillsFromFile(),
    routine: [],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeSkillFromRoutine(pos) {
        dispatch({
            type: 'REMOVE_SKILL_FROM_ROUTINE',
            payload: pos
        });
    }

    function addSkillToRoutine(pos, skill) {
        dispatch({
            type: 'ADD_SKILL_TO_ROUTINE',
            payload: { pos: pos, skill: skill }
        });
    }

    return (<GlobalContext.Provider value={{
        skills: state.skills,
        routine: state.routine,
        removeSkillFromRoutine,
        addSkillToRoutine,
    }}>
        {children}
    </GlobalContext.Provider>);
}