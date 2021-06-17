import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROS, SET_DISPLAY} from "../action_const"
export function getData(){
    return{
        type: GET_USER
    }
}

export function getsuccess(data){
    return{
        type: GET_USER_SUCCESS, 
        payload: data
    }
}

export function geterros(data){
    return{
        type: GET_USER_ERROS, 
        payload: data
    }
}

export function setDisplay(data){
    return{
        type: SET_DISPLAY, 
        payload: data
    }
}