import React from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {rows: state.rows}
}

const ResultLayout = ({rows}) => {
    return (
        rows.length?
        <div className="row justify-content-center alert alert-info font-weight-bold">
            Result is:
            {
                rows.reduce((res,current)=>{
                    return current.enable? res + (current.sign==="+"? 1:-1)*parseInt(current.value || 0) :res
                },0)
            }
        </div>
            :null
    )
}

export const Result = connect(mapStateToProps)(ResultLayout)