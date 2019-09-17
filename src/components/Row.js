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
        <li className={`row mb-0 justify-content-center alert ${idInArray%2===0? 'alert-primary':null}`}>
                <div className="col-3 col-sm-3 col-md-1 mb-2 mb-md-0 text-center">
                    <select
                        className="form-control"
                        onChange={(event)=>{changeRow({id: row.id, type: "sign", value: event.target.value})}}
                        defaultValue={row.sign}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </div>
            <div className="col-9 col-sm-3 col-md-2 mb-2 mb-md-0 text-center">
                <input className="form-control text-center" value={row.value}
                       onChange={(event)=>{changeRow({id: row.id, type: "value", value: event.target.value})}}
                       type="number"/>
            </div>
            <div className="col-6 col-sm-3 col-md-1 text-center">
                <button
                    className={`btn ${row.enable? 'btn-warning': 'btn-success'}`}
                    onClick={(event)=>{changeRow({id: row.id, type: "enable", value: !row.enable})}}>
                    {row.enable? 'Disable' : 'Enable'}</button>
            </div>
            <div className="col-6 col-sm-3 col-md-1 text-center">
                <button
                    className="btn btn-danger"
                onClick={()=>{deleteRow(row.id)}}>
                    Delete
                </button>
            </div>
        </li>
    )
}

export const Row = connect(null,mapDispatchToProps)(RowLayout)