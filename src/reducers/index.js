import {ADD_ROW, DELETE_ROW, CHANGE_ROW} from "../constants";

const initialState = {rows: []}

const  rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_ROW :
            return {...state, rows: [...state.rows, {id:  state.rows.length?state.rows[state.rows.length-1].id+1 : 0, sign: "+", value: '', enable: true}]}
        case CHANGE_ROW:
            return {...state, rows: state.rows.map(row => {return row.id === action.payload.id? {...row, [action.payload.type]: action.payload.value} : row})}
        case DELETE_ROW:
            return {...state, rows: state.rows.filter((row) => row.id !== action.payload)}
        default:
            return state
    }
}

export default rootReducer