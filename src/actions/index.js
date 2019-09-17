import {ADD_ROW, DELETE_ROW, CHANGE_ROW} from "../constants";

export const addRow = (payload) =>{
    return {type: ADD_ROW, payload }
}
export const deleteRow = (payload) =>{
    return {type: DELETE_ROW, payload }
}
export const changeRow = (payload) =>{
    return {type: CHANGE_ROW, payload }
}