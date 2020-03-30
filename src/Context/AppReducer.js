export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_SKILL_FROM_ROUTINE':
            return {
                ...state,
                routine: state.routine.filter(skill => skill !== action.payload)
            }
        case 'ADD_SKILL_TO_ROUTINE':
            let routine = state.routine;
            routine[action.payload.pos] = action.payload.skill;

            return {
                ...state,
                routine: routine
            }
        default:
            return state;
    }
}