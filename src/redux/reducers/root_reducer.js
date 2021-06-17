import {GET_USER_SUCCESS, GET_USER_ERROS, SET_DISPLAY} from './../action_const';
const defaultState = {users: [], display: "block"};

export default function rootReducer(state=defaultState, action){

    switch (action.type) {
        case GET_USER_SUCCESS:
            state.users = action.payload
            return {...state};
        case GET_USER_ERROS:
            state.errMessage = action.payload;
            return {...state};
        case SET_DISPLAY:
            state.display = action.payload;
            return {...state};

        default:
            return state;
    }

}