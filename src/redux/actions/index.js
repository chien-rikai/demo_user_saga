import { 
    GET_USER, 
    GET_USER_SUCCESS, 
    GET_USER_ERROS, 
    SET_DISPLAY, 
    GET_SUCCES_ITEM_USER, 
    GET_ITEM_USER
} from "../action_const"
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

export function getItemUser(id){
    return{
        type: GET_ITEM_USER, 
        payload: id
    }
}


export function getItemSuccess(data){
    return{
        type: GET_SUCCES_ITEM_USER, 
        payload: data
    }
}

