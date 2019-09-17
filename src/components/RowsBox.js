import React from "react"
import { connect } from "react-redux"
import { Row} from "./Row";

const  mapStateToProps = (state) => {
    return {rows: state.rows}
}

export  const RowsBoxLayout = ({rows}) => {
    return rows.map((row, idInArray) => { return <Row key={row.id} row={row} idInArray={idInArray}/>})}


export const  RowsBox = connect(mapStateToProps)(RowsBoxLayout)

