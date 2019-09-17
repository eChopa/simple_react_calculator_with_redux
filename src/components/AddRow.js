import React from "react"
import { connect } from "react-redux"
import { addRow} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {addRow: () => {dispatch(addRow())}}
}

export const AddRowLayOut = ({addRow}) => {
    return (
        <div className="row justify-content-center my-4">
            <button
                className="btn btn-primary"
                onClick={()=>{addRow()}}>
                Add row
            </button>
        </div>
    )
}

export const AddRow = connect(null,mapDispatchToProps)(AddRowLayOut)