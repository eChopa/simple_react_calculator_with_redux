import React from "react"
import { connect } from "react-redux"
import { changeRow,deleteRow } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        changeRow: (id, type,value) => dispatch(changeRow(id, type,value)),
        deleteRow: (id)=>dispatch(deleteRow(id))
    }
}

const RowLayout = ({row, idInArray, changeRow,deleteRow}) => {
    return (
        <li className={`row mb-0 justify-content-around alert ${idInArray%2===0? 'alert-primary':null}`}>
                    <select
                        className="form-control col-3 col-md-2 col-lg-1 mb-2 mb-md-0 text-center"
                        onChange={(event)=>{changeRow({id: row.id, type: "sign", value: event.target.value})}}
                        defaultValue={row.sign}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                <input className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0 text-center form-control text-center"
                       value={row.value}
                       onChange={(event)=>{changeRow({id: row.id, type: "value", value: event.target.value})}}
                       type="number"/>
                <button
                    className={`col-6 col-md-2 col-lg-1 text-center btn ${row.enable? 'btn-warning': 'btn-success'}`}
                    onClick={(event)=>{changeRow({id: row.id, type: "enable", value: !row.enable})}}>
                    {row.enable? 'Disable' : 'Enable'}
                 </button>
                <button
                    className="col-6 col-md-2 col-lg-1 text-center btn btn-danger"
                    onClick={()=>{deleteRow(row.id)}}>
                    Delete
                </button>
        </li>
    )
}

export const Row = connect(null,mapDispatchToProps)(RowLayout)