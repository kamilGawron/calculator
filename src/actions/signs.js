import {ADD_NUM,ADD_SIGN,CLEAR_SIGNS,CLEAR_LAST,SET_RES} from './types'

export const addNewNum = e =>{
    return{
        type: ADD_NUM,
        sign: e.target.innerHTML
    }
}
export const addNewSign = e =>{
    return{
        type: ADD_SIGN,
        sign: e.target.innerHTML
    }
}
export const clearSigns = () =>{
    return {
        type: CLEAR_SIGNS
    }
}
export const clearLast = () =>{
    return {
        type: CLEAR_LAST
    }
}
export const setResult = (res) =>{
    return {
        type: SET_RES,
        result:res
    }
}