import * as actionTypes from '../constants/ActionTypes';

function selectAlbum(state, action) {
    const { selected } = action
    return {
        ...state,
        selected
    }
}

export default function (state = {}, action) {
    switch (action.type) {
        case 'SELECT_ALBUM':
            return selectAlbum(state, action.payload)
        default:
            return state
    }
}
