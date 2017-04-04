import * as actionTypes from '../constants/ActionTypes';

function selectTrack(state, action) {
    const { selected } = action
    return {
        ...state,
        selected
    }
}

export default function (state = {}, action) {
    switch (action.type) {
        case 'SELECT_TRACK':
            return selectTrack(state, action.payload)
        default:
            return state
    }
}
